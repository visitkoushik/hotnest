import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/appServices/baseService';
import { Customer } from 'src/models/Customer';

@Injectable()
export class CustomerService implements BaseService<Customer> {
  findAll<Customer>(authKey: string): Customer[] {
    const list: Customer[] = [] as Customer[];
    return list;
  }
}
