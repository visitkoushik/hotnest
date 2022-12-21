import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { BaseController } from 'src/appServices/BaseControler';
import { Billing } from 'src/models/Billing';
import { BillingService } from './billing.service';

import { Request } from 'express';
import { CustomerService } from '../castomer/castomer.service';
import { Customer } from 'src/models/Customer';
import { AppResponse } from 'src/models/AppResponse';
import { BillingReq } from 'src/models/BillingReq';
import { generate } from 'rxjs';
import { UserType } from 'src/models/enum/UserType';
import { Roles } from 'src/models/enum/Roles';
@Controller('billing')
export class BillingController extends BaseController<Billing, BillingService> {
  constructor(
    private readonly appService: BillingService,
    private readonly customerService: CustomerService,
  ) {
    super(appService);
  }

  async beforeProcessRequest(request: Request): Promise<Billing> {
    const record: BillingReq = request.body;
    const customer = await this.createingCustomerFromRequest(record);

    const newrecord: BillingReq = { ...record };
    delete newrecord.castomerInfo;

    if (customer) {
      const billing: Billing = newrecord as unknown as Billing;
      billing.customer = customer.id;
      return billing;
    } else {
      throw new Error("Can't add client");
    }
  }

  async createingCustomerFromRequest(record: BillingReq): Promise<Customer> {
    try {
      const C: Customer = record.castomerInfo;

      C.userType = UserType.CLIENT;
      C.roles = Roles.CLIENT;

      const appC: AppResponse<Customer> = await this.customerService.insert(C);

      let newC: Customer = null;
      if (appC.status == 1) {
        newC = appC.responseObject;
      }

      return newC;
    } catch (e) {
      throw new Error("Can't create User");
    }
  }

  async onError(record: Billing) {
    await this.customerService.delete(record.customer + '');
  }
}
