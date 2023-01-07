import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from 'src/models/Employee';
import { Roles } from 'src/models/enum/Roles';
import { Login, LoginDocument } from 'src/models/Login';
import { v4 as uuid } from 'uuid';
import { EmployeeService } from './employee.service';

@Injectable()
export class LoginRegisterService {
  constructor(
    @InjectModel('Login')
    private readonly loginModel: Model<Login>,
  ) {}

  public async findByAuthCode(authCode: string): Promise<Login> {
    const filter_stage = {
      authCode: {
        $eq: authCode,
      },
    };

    try {
      const logInfo: Login = await this.loginModel.findOne(filter_stage);
      if (!logInfo) {
        throw new Error('Invalid authcode ' + authCode);
      }
      return logInfo;
    } catch (e) {
      throw e;
    }
  }
  async insert(login: Login): Promise<Login> {
    if (login.active == undefined || login.active == null) {
      login.active = true;
    }
    const newObj = new this.loginModel(login);
    const filter_stage = {
      userName: {
        $eq: newObj.userName,
      },
    };
    const logInfo: Login = await this.loginModel.findOne(filter_stage);

    if (logInfo) {
      throw new Error(`Username ${logInfo.userName} is already taken`);
    }

    const savedObject = await newObj.save().catch((e) => {
      throw new Error(e.message);
    });
    return savedObject;
  }
  async logOut(authorization: { authcode: string }) {
    const filter_stage = {
      authCode: {
        $eq: authorization.authcode,
      },
    };
    try {
      const logInfo: Login = await this.loginModel.findOne(filter_stage);
      if (!logInfo) {
        throw new Error('Invalid authcode');
      }
      logInfo.authCode = '';

      const newObj: any = new this.loginModel(logInfo);
      const savedObject = await newObj.save().catch((e) => {
        throw new Error(e.message);
      });
      if (!savedObject) {
        throw new Error(`Can't able to logout`);
      }
      return 'Successfuly Logout';
    } catch (e) {
      throw e;
    }
  }
  async login(authorization: {
    username: string;
    password: string;
  }): Promise<Login> {
    const filter_stage = {
      userName: {
        $eq: authorization.username,
      },
      passcode: {
        $eq: authorization.password,
      },
    };

    try {
      const logInfo: Login = await this.loginModel.findOne(filter_stage);

      if (!logInfo) {
        throw new Error('Invalid Login');
      }
      logInfo.authCode = uuid().replace(/-/g, '');

      const newObj: any = new this.loginModel(logInfo);

      const savedObject = await newObj.save().catch((e) => {
        throw new Error(e.message);
      });
      if (!savedObject) {
        throw new Error(`Can't able to authenticate`);
      }
      console.log('savedObject ', savedObject);
      return logInfo;
    } catch (e) {
      console.log('================Login Service==================', e);
      throw new Error(e.message);
    }
  }
  async changePass(passObj: {
    oldPassword: string;
    newPassword: string;
    authcode: string;
  }) {
    const filter_stage = {
      authCode: {
        $eq: passObj.authcode,
      },
    };

    try {
      const logInfo: Login = await this.loginModel.findOne(filter_stage);
      if (!logInfo) {
        throw new Error('Invalid authcode');
      }
      if (logInfo.passcode !== passObj.oldPassword) {
        throw new Error('Old Password is not matching');
      }
      logInfo.authCode = '';
      logInfo.passcode = passObj.newPassword;

      const newObj: any = new this.loginModel(logInfo);
      const savedObject = await newObj.save().catch((e) => {
        throw new Error(e.message);
      });
      if (!savedObject) {
        throw new Error(`Can't able to change password`);
      }
      return 'Successfuly changed password. Login to continue';
    } catch (e) {
      throw new Error('Something Went wrong.');
    }
  }
}
