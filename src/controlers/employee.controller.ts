import {
  Controller,
  Get,
  Res,
  Headers,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
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
import { Genders } from 'src/models/enum/Genders';
import { UserType } from 'src/models/enum/UserType';

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
    if (request.method === 'POST') {
      return this.preAddEmployee(request);
    } else if (request.method === 'PUT') {
      return this.preUpdateEmployee(request);
    }
  }

  private preAddEmployee = async (request: Request): Promise<Employee> => {
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
  };

  private preUpdateEmployee = async (request: Request): Promise<Employee> => {
    const record: Employee = request.body;
    const authCode: string = request.headers['auth-code'].toString();
    if (authCode) {
      const ownerUser: Employee = await this.empService.getUserByAuthCode(
        authCode,
      );
      const l: Login = record.login as unknown as Login;
      const user: Employee = await this.empService.findByLoginUserName(
        l.userName,
      );
      if (
        ownerUser.roles === Roles.ADMIN ||
        ownerUser.roles === Roles.SUPERADMIN
      ) {
        const cloneRecord: Employee = { ...record };
        user.dateOfBirth = cloneRecord.dateOfBirth;
        user.dateOfExist = cloneRecord.dateOfExist;
        user.dateOfJoin = cloneRecord.dateOfJoin;
        user.firstName = cloneRecord.firstName;
        user.lastName = cloneRecord.lastName;
        user.middleName = cloneRecord.middleName;
        user.salary = cloneRecord.salary;
        user.email = cloneRecord.email;
        user.mobileNumbers = cloneRecord.mobileNumbers;
        user.gender = Genders[cloneRecord.gender] || user.gender;
        user.isCurrent = cloneRecord.isCurrent;
        user.roles = Roles[cloneRecord.roles] || user.roles;
        user.userType = UserType[cloneRecord.userType] || user.userType;
        user.primaryAddressIndex = cloneRecord.primaryAddressIndex;

        return user;
      }
    }
    throw new Error("Can't update Employee Information");
  };

  RegisterUser(empReq: EmployeeReq): Promise<Login> {
    const l: Login = {} as Login;
    l.userName = empReq.userName;
    l.passcode = empReq.passcode;
    l.active = true;
    return this.userServc.insert(l);
  }

  modifyResultAll = (response: AppResponse<Employee[]>) => {
    const resObj: any[] = response.responseObject.map((e: Employee) => {
      {
        const { id, passcode, authCode, active, ...l } = JSON.parse(
          JSON.stringify(e.login),
        );
        e.login = { ...l };
      }
      const { id, ...filterdCloneObject } = JSON.parse(JSON.stringify(e));
      return filterdCloneObject;
    });

    return { ...response, responseObject: resObj };
  };
  modifyResultOne = (response: AppResponse<Employee>) => {
    const resObj = response.responseObject;
    {
      const { id, passcode, authCode, active, ...l } = JSON.parse(
        JSON.stringify(resObj.login),
      );
      resObj.login = { ...l };
    }
    const { id, ...filterdCloneObject } = JSON.parse(JSON.stringify(resObj));
    return filterdCloneObject;
  };

  @Get('profile')
  async getProfile(@Res() response: Response, @Headers() headers) {
    const authCode = headers['auth-code'];
    if (authCode) {
      const user: Employee = await this.empService.getUserByAuthCode(authCode);
      if (user) {
        {
          const { id, passcode, authCode, active, ...l } = JSON.parse(
            JSON.stringify(user.login),
          );
          user.login = { ...l };
        }
        const { id, dateOfExist, salary, ...responseUser } = JSON.parse(
          JSON.stringify(user),
        );

        return response
          .status(HttpStatus.OK)
          .json(new AppResponse<any>(1, responseUser, null));
      }
    }
    return response
      .status(HttpStatus.OK)
      .json(new AppResponse<Employee>(0, null, 'No user found'));
  }

  @Post('/changepassword')
  async changePass(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    const passObj: { oldPassword: string; newPassword: string } = request.body;
    try {
      this.empService
        .changePass(
          passObj.oldPassword,
          passObj.newPassword,
          headers['auth-code'],
        )
        .then((msg: string) => {
          response.status(HttpStatus.OK).json(new AppResponse(1, msg, null));
        })
        .catch((e) => {
          response
            .status(HttpStatus.BAD_REQUEST)
            .json(new AppResponse(0, null, e.message));
        });
    } catch (e) {
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json(new AppResponse(0, null, e.message));
    }
  }

  @Post('/resetpassword')
  async resetPass(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    const state: HeaderState = await this.CheckAccesRight(
      headers,
      response,
      ModeOperation.POST,
    );

    if (state !== HeaderState.TRUE) {
      throw new Error('Something went wrong');
    }

    const passObj: { userName: string; newPassword: string } = request.body;
    try {
      await this.empService
        .restPass(passObj.userName, passObj.newPassword)
        .then((msg: string) => {
          response.status(HttpStatus.OK).json(new AppResponse(1, msg, null));
        })
        .catch((e) => {
          response
            .status(HttpStatus.BAD_REQUEST)
            .json(new AppResponse(0, null, e.message));
        });
    } catch (e) {
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json(new AppResponse(0, null, e.message));
    }
  }
}
