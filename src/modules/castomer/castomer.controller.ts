import { Controller, Get } from '@nestjs/common';
import { Customer } from 'src/models/Customer';
import { CustomerService } from './castomer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly appService: CustomerService) {}

  @Get('list')
  findAll(): Customer[] {
    return this.appService.findAll('sda');
  }
}
