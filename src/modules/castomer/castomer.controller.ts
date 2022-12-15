import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './castomer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly appService: CustomerService) {}

  @Get('list')
  findAll(): string {
    return this.appService.findAll();
  }
}
