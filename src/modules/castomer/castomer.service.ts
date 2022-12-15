import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  findAll(): string {
    return 'Customer Hello World!';
  }
}
