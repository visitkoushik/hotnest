import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/services/BaseServices';
import { AppResponse } from 'src/models/AppResponse';
import { Billing } from 'src/models/Billing';
import { BillingItem, BillingItemSchema } from 'src/models/BillingItem';
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
        select: 'firstName lastName middleName gender',
        options: { strictPopulate: false },
      },
    ]);
  }

  // public beforeInsert(record: Billing): Billing {

  //   this.billingModel.findOne({billNumber: {$gte:5} })

  // }
}
