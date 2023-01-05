import { Controller, Get, Res, Headers, HttpStatus } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Employee } from 'src/models/Employee';
import { EmployeeReq } from 'src/models/EmployeeReq';
import { Person } from 'src/models/Person';
import { Login } from 'src/models/Login';
import { LoginRegisterService } from 'src/services/login-register.service';
import { EmployeeService } from '../services/employee.service';
import { Request, Response } from 'express';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { AccessService } from 'src/services/access.service';
import { HeaderState } from 'src/models/enum/HeaderState';
import { AppResponse } from 'src/models/AppResponse';

@Controller('employee')
export class EmployeeController extends BaseController<
  Employee,
  EmployeeService
> {
  async onRequest(headers: any, mode: ModeOperation): Promise<HeaderState> {
    const listAllSuperAdmins: Employee[] | null = (
      await this.empService.findAll(
        {
          roles: { $eq: Roles.SUPERADMIN.toString() },
        },
        false,
      )
    ).responseObject;

    if (!listAllSuperAdmins || listAllSuperAdmins.length === 0) {
      return HeaderState.BYPASS;
    }
    const authCode = headers['auth-code'];

    const r: Roles = await this.empService.validateAuth(authCode);

    const listOfPrev: string[] =
      this.accessService.accessList[r.toString().toUpperCase()];

    return listOfPrev.findIndex(
      (e: string) =>
        e == Employee.name.toUpperCase() + '_' + mode.toString().toUpperCase(),
    ) > -1
      ? HeaderState.TRUE
      : HeaderState.FALSE;
  }
  async onAdd(record: Employee) {
    if (record.isCurrent == null || record.isCurrent == undefined) {
      if (record.dateOfExist.toString().trim()) {
        record.isCurrent = false;
      } else {
        record.isCurrent = true;
      }
    }

    return record;
  }
  constructor(
    private readonly appService: EmployeeService,
    private readonly userServc: LoginRegisterService,
    private readonly accessService: AccessService,
  ) {
    super(appService);
  }

  async beforeProcessRequest(request: Request): Promise<Employee> {
    const record: EmployeeReq = request.body;
    const empList: Employee[] | null = (
      await this.empService.findAll(
        {
          roles: { $eq: Roles.SUPERADMIN.toString() },
        },
        false,
      )
    ).responseObject;
    if (
      (!empList || empList.length === 0) &&
      record.roles !== Roles.SUPERADMIN
    ) {
      throw new Error("Can't add Employee Information");
    }
    const login: Login = await this.RegisterUser(record);
    try {
      const cloneRecord: EmployeeReq = { ...record };
      if (login) {
        const emp: Employee = cloneRecord as unknown as Employee;
        emp.login = login.id;
        return emp;
      } else {
        throw new Error("Can't add Employee Information");
      }
    } catch (e) {
      throw new Error(e.toString());
    }
  }

  RegisterUser(empReq: EmployeeReq): Promise<Login> {
    const l: Login = {} as Login;
    l.userName = empReq.userName;
    l.passcode = empReq.passcode;
    l.active = true;
    return this.userServc.insert(l);
  }

  @Get('profile')
  async getProfile(@Res() response: Response, @Headers() headers) {
    const authCode = headers['auth-code'];
    if (authCode) {
      const user: Employee = await this.empService.getUserByAuthCode(authCode);
      if (user) {
        delete user.salary;
        const responseUser = {
          firstName: user.firstName,
          lastName: user.lastName,
          middleName: user.middleName,
          mobileNumbers: user.mobileNumbers,
          email: user.email,
          gender: user.gender,
          roles: user.roles,
          dateOfBirth: user.dateOfBirth,
          userType: user.userType,
          dateOfJoin: user.dateOfJoin,
          login: user.login,
        };
        return response
          .status(HttpStatus.OK)
          .json(new AppResponse<any>(1, responseUser, null));
      }
    }
    return response
      .status(HttpStatus.OK)
      .json(new AppResponse<Employee>(0, null, 'No user found'));
  }
}
