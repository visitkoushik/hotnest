import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from 'src/models/Employee';
import { Roles } from 'src/models/enum/Roles';
import { Login, LoginDocument } from 'src/models/Login';
import { LoginResp } from 'src/models/LoginResp';
import { v4 as uuid } from 'uuid';
import { CryptoService } from './crypto.service';
import { EmployeeService } from './employee.service';

@Injectable()
export class LoginRegisterService {
  constructor(
    @InjectModel('Login')
    private readonly loginModel: Model<Login>,
    private readonly cryptoService: CryptoService,
  ) {}
  get Model() {
    return this.loginModel;
  }
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

  public async findByUserName(username: string): Promise<Login> {
    const filter_stage = {
      userName: {
        $eq: username,
      },
    };

    try {
      const logInfo: Login = await this.loginModel.findOne(filter_stage);
      if (!logInfo) {
        throw new Error('Invalid user name ' + username);
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
  async logOut(authcode: string): Promise<string> {
    const filter_stage = {
      authCode: {
        $eq: authcode,
      },
    };
    return new Promise(async (res, rej) => {
      const logInfo: Login = await this.loginModel.findOne(filter_stage);
      if (!logInfo) {
        rej('Invalid authcode');
      } else {
        logInfo.authCode = '';

        const newObj: any = new this.loginModel(logInfo);
        const savedObject = await newObj.save().catch((e) => {
          rej(e.message);
        });
        if (!savedObject) {
          rej(`Can't able to logout`);
        } else {
          res('Successfuly Logout');
        }
      }
    });
  }
  async login(authorization: {
    username: string;
    password: string;
  }): Promise<LoginResp> {
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
      if (logInfo.authCode.trim() == '') {
        logInfo.authCode = uuid().replace(/-/g, '');
      }

      const newObj: any = new this.loginModel(logInfo);

      const savedObject = await newObj.save().catch((e) => {
        throw new Error(e.message);
      });
      if (!savedObject) {
        throw new Error(`Can't able to authenticate`);
      }

      const { passcode, active, id, ...lrsp } = JSON.parse(
        JSON.stringify(logInfo),
      );
      // console.log('savedObject ', lrsp);
      return lrsp;
    } catch (e) {
      // console.log('================Login Service==================', e);
      throw new Error(e.message);
    }
  }
  async changePass(oldPassword: string, newPassword: string, authcode: string) {
    const filter_stage = {
      authCode: {
        $eq: authcode,
      },
    };

    try {
      const logInfo: Login = await this.loginModel.findOne(filter_stage);
      if (!logInfo) {
        throw new Error('Invalid authcode');
      }
      if (logInfo.passcode !== oldPassword) {
        throw new Error('Old Password is not matching');
      }
      if (logInfo.passcode === newPassword) {
        throw new Error('New Password can not be same as old');
      }
      logInfo.authCode = '';
      logInfo.passcode = newPassword;

      const newObj: any = new this.loginModel(logInfo);
      const savedObject = await newObj.save().catch((e) => {
        throw new Error(e.message);
      });
      if (!savedObject) {
        throw new Error(`Can't able to change password`);
      }
      return 'Successfuly changed password. Login to continue';
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async resetPass(logInfo: Login) {
    try {
      const newObj: any = new this.loginModel(logInfo);
      const savedObject = await newObj.save().catch((e) => {
        throw new Error(e.message);
      });
      if (!savedObject) {
        throw new Error(`Can't able to change password`);
      }
      return 'Successfuly changed password.';
    } catch (e) {
      throw new Error('Something Went wrong.');
    }
  }
}
