import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Employee } from 'src/models/Employee';
import { EmployeeService } from '../services/employee.service';

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
  constructor(private readonly appService: EmployeeService) {
    super(appService);
  }
}
