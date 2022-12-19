import { Prop, Schema } from '@nestjs/mongoose';
import { BaseSchema } from './BaseSchema';
import { BillingItem } from './BillingItem';
import { Customer } from './Customer';
import * as mongoose from 'mongoose';

export type BillingDocument = Billing & mongoose.Document;
@Schema()
export class Billing {
  @Prop({ required: [true, 'Billing item list can not be empty'] })
  billingItemList: BillingItem[];

  @Prop({ required: true, default: Date.now })
  billingDate: Date;

  @Prop({
    ref: Customer.name,
    required: [true, 'Customer id required'],
  })
  customer: mongoose.Schema.Types.ObjectId;

  @Prop({
    required: [true, 'Billnumber required'],
  })
  billNumber: string;

  @Prop({ required: false })
  discount: number;

  @Prop({ required: false })
  isDiscountInPercentage: boolean;
}

export const schema = BaseSchema.createForClass(Billing);
schema.index({ billingDate: 1, billNumber: 1 }, { unique: true });
export const billingImpl = { name: Billing.name, schema };
