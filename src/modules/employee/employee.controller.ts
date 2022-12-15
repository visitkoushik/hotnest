import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly appService: EmployeeService) {}

  @Get('list')
  findAll(): string {
    return this.appService.findAll();
  }
}
