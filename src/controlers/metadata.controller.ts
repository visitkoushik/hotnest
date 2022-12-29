import { Controller, Get, HttpStatus, Res, Headers } from '@nestjs/common';
import { Response } from 'express';
import { connected } from 'process';
import { AppResponse } from 'src/models/AppResponse';
import { Employee } from 'src/models/Employee';
import { Roles } from 'src/models/enum/Roles';
import { UserType } from 'src/models/enum/UserType';
import { MetaData } from 'src/models/MetaData';
import { EmployeeService } from 'src/services/employee.service';
import { LoginRegisterService } from 'src/services/login-register.service';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly empService: EmployeeService) {}

  @Get()
  async list(@Res() response: Response, @Headers() headers) {
    const authCode = headers['auth-code'];
    console.log(headers);
    const filter_stage = {
      userType: {
        $eq: UserType.OWNER,
      },
    };

    const empList: Employee[] | null = (
      await this.empService.findAll(filter_stage, false)
    ).responseObject;

    let ownerNeedtocreate = false;
    if (!Array.isArray(empList) || empList.length == 0) {
      ownerNeedtocreate = true;
    }

    const validatorResult = await this.empService.validateAuth(authCode);

    response
      .status(HttpStatus.OK)
      .json(
        new AppResponse(
          1,
          new MetaData(ownerNeedtocreate, validatorResult).getMenu(),
          null,
        ),
      ); //
  }
}
