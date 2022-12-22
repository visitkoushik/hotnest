import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/services/BaseServices';
import { BillingItem } from 'src/models/BillingItem';
import { Model } from 'mongoose';
import { Item } from 'src/models/Item';

@Injectable()
export class BillingItemService extends BaseService<BillingItem> {
  constructor(
    @InjectModel(BillingItem.name)
    private readonly billingItemModel: Model<BillingItem>,
  ) {
    super(billingItemModel);
  }
}
