import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/appServices/BaseServices';
import { Billing } from 'src/models/Billing';
import { Category } from 'src/models/Category';
import { Customer } from 'src/models/Customer';
import { Item } from 'src/models/Item';

@Injectable()
export class BillingService extends BaseService<Billing> {
  constructor(
    @InjectModel(Billing.name)
    private readonly billingModel: Model<Billing>,
  ) {
    super(billingModel, [
      {
        path: Customer.name.toLowerCase(),
        model: Customer.name,
        options: { strictPopulate: false },
      },
      {
        path: Item.name.toLowerCase(),
        model: Item.name,
        options: { strictPopulate: false },
      },
      {
        path: Category.name.toLowerCase(),
        model: Category.name,
        options: { strictPopulate: false },
      },
    ]);
  }
}
