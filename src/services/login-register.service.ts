import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from 'src/models/Login';

@Injectable()
export class LoginRegisterService {
  constructor(
    @InjectModel('Login')
    private readonly loginModel: Model<Login>,
  ) {}
  async insert(login: Login): Promise<string | Login> {
    const newObj = new this.loginModel(login);
    const savedObject = await newObj.save();
    return savedObject;
  }
}
