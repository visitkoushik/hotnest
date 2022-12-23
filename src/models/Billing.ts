import { Prop, Schema } from '@nestjs/mongoose';
import { BaseSchema } from './BaseSchema';
import { BillingItem, BillingItemSchema } from './BillingItem';
import { Customer } from './Customer';
import * as mongoose from 'mongoose';
import { Category } from './Category';
import { Item } from './Item';
import { BaseEntity } from './BaseEntity';

export type BillingDocument = Billing & mongoose.Document;
@Schema()
export class Billing extends BaseEntity {
  @Prop({
    type: [BillingItemSchema],
    required: [true, 'Billing item list can not be empty'],
  })
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
    unique: [true, 'Duplicate bill number. try again'],
  })
  billNumber: string;

  @Prop({ required: false })
  discount: number;

  @Prop({ required: false })
  isDiscountInPercentage: boolean;

  @Prop({ required: false, default: 0 })
  Ptotal: number;

  @Prop({ required: false, default: 0 })
  Stotal: number;

  @Prop({ required: true, default: 0 })
  paid: number;

  @Prop({ required: true, default: 0 })
  tax: number;
}

export const schema = BaseSchema.createForClass(Billing);

export const billingImpl = { name: Billing.name, schema };
