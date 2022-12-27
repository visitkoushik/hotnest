import { Injectable } from '@nestjs/common';
import { Employee } from 'src/models/Employee';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/services/BaseServices';
import { Login } from 'src/models/Login';
import { Roles } from 'src/models/enum/Roles';

@Injectable()
export class EmployeeService extends BaseService<Employee> {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<Employee>,
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
}
