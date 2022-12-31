import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Customer } from 'src/models/Customer';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { UserType } from 'src/models/enum/UserType';
import { AccessService } from 'src/services/access.service';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController extends BaseController<
  Customer,
  CustomerService
> {
  async onRequest(headers: any, mode: ModeOperation): Promise<boolean> {
    const authCode = headers['auth-code'];
    const r: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[r.toString().toUpperCase()];

    return (
      listOfPrev.findIndex(
        (e: string) =>
          e ==
          Customer.name.toUpperCase() + '_' + mode.toString().toUpperCase(),
      ) > -1
    );
  }
  async onAdd(record: Customer) {
    record.roles = Roles.CLIENT;
    record.userType = UserType.CLIENT;
    return record;
  }
  constructor(
    private readonly appService: CustomerService,
    private readonly accessService: AccessService,
  ) {
    super(appService);
  }
}
