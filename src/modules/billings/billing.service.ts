import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/appServices/BaseServices';
import { Billing } from 'src/models/Billing';
import { Customer } from 'src/models/Customer';

@Injectable()
export class BillingService extends BaseService<Billing> {
  constructor(
    @InjectModel(Billing.name)
    private readonly billingModel: Model<Billing>,
  ) {
    super(billingModel, {
      path: Customer.name.toLowerCase(),
      model: Customer.name,
    });
  }
}
