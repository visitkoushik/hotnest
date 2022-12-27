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
  constructor(
    private readonly empService: EmployeeService,
    private readonly loginService: LoginRegisterService,
  ) {}

  @Get()
  async list(@Headers() headers, @Res() response: Response) {
    const authCode = headers['auth-code'];
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

    const validatorResult = await this.validateAuth(authCode);

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

  private validateAuth = async (
    authCode: string | null | undefined,
  ): Promise<Roles> => {
    if (authCode) {
      const loginUser = await this.loginService
        .findByAuthCode(authCode)
        .catch((e) => {
          return null;
        });

      if (loginUser) {
        const user: Employee = await this.empService
          .findByLoginId(loginUser.id + '')
          .catch((e) => {
            return null;
          });
        if (user) {
          return user.roles;
        }
        return Roles.ZERO;
      }
    }
    return Roles.ZERO;
  };
}
