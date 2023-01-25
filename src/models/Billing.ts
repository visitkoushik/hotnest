import { Prop, Schema } from '@nestjs/mongoose';
import { BaseSchema } from './BaseSchema';
import { BillingItem, BillingItemSchema } from './BillingItem';
import { Customer } from './Customer';
import * as mongoose from 'mongoose';
import { Category } from './Category';
import { Item } from './Item';
import { BaseEntity } from './BaseEntity';
import { Branch } from './Branch';

export type BillingDocument = Billing & mongoose.Document;
@Schema()
export class Billing extends BaseEntity {
  @Prop({
    type: [BillingItemSchema],
    required: [true, 'Billing item list can not be empty'],
  })
  billingItemList: BillingItem[];

  @Prop({ required: true, default: new Date().toISOString() })
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

  @Prop({ required: true, default: 0 })
  Ptotal: number;

  @Prop({ required: true, default: 0 })
  Stotal: number;

  @Prop({ required: true, default: 0 })
  paid: number;

  @Prop({ required: true, default: 0 })
  tax: number;

  @Prop({ required: true })
  branchCode: string;
}

export const schema = BaseSchema.createForClass(Billing);
schema.index({ billNumber: 1, billingDate: 1 }, { unique: true });
export const billingImpl = { name: Billing.name, schema };
