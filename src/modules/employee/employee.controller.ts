import { Controller, Get } from '@nestjs/common';
import { Employee } from 'src/models/Employee';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly appService: EmployeeService) {}

  // @Get('list')
  // findAll(): Employee[] {
  //   return this.appService.findAll('dsa');
  // }
}
