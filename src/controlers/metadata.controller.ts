import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppResponse } from 'src/models/AppResponse';
import { Employee } from 'src/models/Employee';
import { UserType } from 'src/models/enum/UserType';
import { MetaData } from 'src/models/MetaData';
import { EmployeeService } from 'src/services/employee.service';

@Controller('metadata')
export class MetadataController {
  constructor(private readonly empService: EmployeeService) {}

  @Get()
  async list(@Res() response: Response) {
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
    response
      .status(HttpStatus.OK)
      .json(
        new AppResponse(1, new MetaData(ownerNeedtocreate).getMenu(), null),
      ); //
  }
}
