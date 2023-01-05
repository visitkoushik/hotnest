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
      login: {
        $eq: loginInfo,
      },
    };

    try {
      const queryObject = this.employeeModel.find(filter_stage);
      const employee: Employee[] = await queryObject.populate([
        {
          path: Login.name.toLowerCase(),
          model: Login.name,
          select: 'userName -_id',
          options: { strictPopulate: false },
        },
      ]);

      if (!employee) {
        throw new Error('Invalid LoginInfo');
      }
      return employee[0];
    } catch (e) {
      return e;
    }
  }

  async validateAuth(authCode: string): Promise<Roles> {
    const user: Employee = await this.getUserByAuthCode(authCode);
    if (user) {
      return user.roles;
    }
    return Roles.ZERO;
  }

  async getUserByAuthCode(authCode: string): Promise<Employee> {
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
          return user;
        }
      }
    }
    return null;
  }
}
