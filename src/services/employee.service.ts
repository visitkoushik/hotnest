import { Injectable } from '@nestjs/common';
import { Employee } from 'src/models/Employee';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/services/BaseServices';
import { Login } from 'src/models/Login';
import { Roles } from 'src/models/enum/Roles';
import { LoginRegisterService } from './login-register.service';
import { AppResponse } from 'src/models/AppResponse';

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
  async findByLoginUserName(username: string): Promise<Employee> {
    try {
      const login: Login = await this.loginService.findByUserName(username);
      if (login) {
        const filter_stage = {
          login: {
            $eq: login.id,
          },
        };
        const emp: Employee = await this.employeeModel.findOne(filter_stage);
        return emp;
      }
      throw new Error(`Can't find Login info`);
    } catch (e) {
      throw new Error(e.message);
    }
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

  async update(
    record: Employee,
    id: string,
  ): Promise<AppResponse<string | Employee>> {
    return super.update(record, record.id.toString());
  }

  async changePass(
    oldPassword: string,
    newPassword: string,
    authcode: string,
  ): Promise<string> {
    try {
      return this.loginService.changePass(oldPassword, newPassword, authcode);
    } catch (e) {
      throw new Error('Something Went Wrong');
    }
  }

  async restPass(userName: string, newPassword: string): Promise<string> {
    try {
      const empLoginInfo: Login = await this.loginService.findByUserName(
        userName,
      );
      if (newPassword.length < 8) {
        throw new Error('Password minimum length should be 8 ');
      }
      if (!empLoginInfo) {
        throw new Error('Invalid User Name');
      }
      empLoginInfo.passcode = newPassword;
      return this.loginService.resetPass(empLoginInfo);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
