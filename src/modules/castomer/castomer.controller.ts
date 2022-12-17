import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/appServices/BaseControler';
import { Customer } from 'src/models/Customer';
import { Roles } from 'src/models/enum/Roles';
import { CustomerService } from './castomer.service';

@Controller('customer')
export class CustomerController extends BaseController<
  Customer,
  CustomerService
> {
  onAdd(record: Customer) {
    record.roles = Roles.CLIENT;
    return record;
  }
  constructor(private readonly appService: CustomerService) {
    super(appService);
  }
}
