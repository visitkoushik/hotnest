import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/appServices/baseService';
import { Employee } from 'src/models/Employee';

@Injectable()
export class EmployeeService implements BaseService<Employee> {
  findAll<Employee>(authKey: string): Employee[] {
    const list: Employee[] = [] as Employee[];
    return list;
  }
}
