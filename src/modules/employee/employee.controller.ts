import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/appServices/BaseControler';
import { Employee } from 'src/models/Employee';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController extends BaseController<
  Employee,
  EmployeeService
> {
  onAdd(record: Employee) {
    if (record.isCurrent == null || record.isCurrent == undefined) {
      record.isCurrent = true;
    }

    return record;
  }
  constructor(private readonly appService: EmployeeService) {
    super(appService);
  }
}
