import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/appServices/BaseServices';
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
        select: 'firstName description gender',
        options: { strictPopulate: false },
      },
    ]);
  }

  public beforeInsert(record: Billing): Billing {
    return this.calculateTotal(record);
  }

  private calculateTotal(record: Billing): Billing {
    record.Ptotal = 0;
    record.Stotal = 0;
    record.billingItemList.map((b) => {
      record.Ptotal += b.priceAmount;
      record.Stotal += b.sellingAmount;
    });

    return JSON.parse(JSON.stringify(record));
  }
 

}
