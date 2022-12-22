import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Customer } from 'src/models/Customer';
import { Roles } from 'src/models/enum/Roles';
import { UserType } from 'src/models/enum/UserType';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController extends BaseController<
  Customer,
  CustomerService
> {
  async onAdd(record: Customer) {
    record.roles = Roles.CLIENT;
    record.userType = UserType.CLIENT;
    return record;
  }
  constructor(private readonly appService: CustomerService) {
    super(appService);
  }
}
