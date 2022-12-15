import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  findAll(): string {
    return 'Employee Hello World!';
  }
}
