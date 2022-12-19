import { Injectable } from '@nestjs/common';
import { Employee } from 'src/models/Employee';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/appServices/BaseServices';

@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<Employee>,
  ) {
    super(employeeModel);
  }
}
