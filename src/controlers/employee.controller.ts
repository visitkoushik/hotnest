import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Employee } from 'src/models/Employee';
import { EmployeeReq } from 'src/models/EmployeeReq';
import { Login } from 'src/models/Login';
import { LoginRegisterService } from 'src/services/login-register.service';
import { EmployeeService } from '../services/employee.service';
import { Request } from 'express';

@Controller('employee')
export class EmployeeController extends BaseController<
  Employee,
  EmployeeService
> {
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
  ) {
    super(appService);
  }

  async beforeProcessRequest(request: Request): Promise<Employee> {
    const record: EmployeeReq = request.body;
    const login: Login = await this.RegisterUser(record);
    try {
      const cloneRecord: EmployeeReq = { ...record };
      if (login) {
        const emp: Employee = cloneRecord as unknown as Employee;
        emp.loginInfo = login.id;
        return emp;
      } else {
        throw new Error("Can't add Employee Login Information");
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
}
