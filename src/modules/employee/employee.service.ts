import { Injectable } from '@nestjs/common';
import { Employee } from 'src/models/Employee';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee')
    private readonly loginModel: Model<Employee>,
  ) {}
  async insert(login: Employee): Promise<string | Employee> {
    const newObj = new this.loginModel(login);
    const savedObject = await newObj.save();
    return savedObject;
  }
}
