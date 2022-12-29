import { Injectable } from '@nestjs/common';
import { Employee } from 'src/models/Employee';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/services/BaseServices';
import { Login } from 'src/models/Login';
import { Roles } from 'src/models/enum/Roles';
import { LoginRegisterService } from './login-register.service';

@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<Employee>,
    private readonly loginService: LoginRegisterService,
  ) {
    super(employeeModel, [
      {
        path: Login.name.toLowerCase(),
        model: Login.name,
        options: { strictPopulate: false },
      },
    ]);
  }

  async findByLoginId(loginInfo: string): Promise<Employee> {
    const filter_stage = {
      loginInfo: {
        $eq: loginInfo,
      },
    };

    try {
      const employee: Employee = await this.employeeModel.findOne(filter_stage);
      if (!employee) {
        throw new Error('Invalid LoginInfo');
      }
      return employee;
    } catch (e) {
      return e;
    }
  }

  async validateAuth(authCode: string): Promise<Roles> {
    if (authCode) {
      const loginUser = await this.loginService
        .findByAuthCode(authCode)
        .catch((e) => {
          return null;
        });

      if (loginUser) {
        const user: Employee = await this.findByLoginId(
          loginUser.id + '',
        ).catch((e) => {
          return null;
        });
        if (user) {
          return user.roles;
        }
        return Roles.ZERO;
      }
    }
    return Roles.ZERO;
  }
}
