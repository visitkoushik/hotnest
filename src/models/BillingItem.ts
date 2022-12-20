import { Schema, Prop } from '@nestjs/mongoose';
import { BaseSchema } from './BaseSchema';
import * as mongoose from 'mongoose';
import { Item } from './Item';

export type BillingItemDocument = BillingItem & mongoose.Document;
@Schema()
export class BillingItem {
  @Prop({ required: true })
  itemID: string;
  @Prop({ required: true })
  itemName: string;
  @Prop()
  priceAmount: number;
  @Prop()
  sellingAmount: number;
  @Prop()
  itemCount: number;
  @Prop()
  discount: number;
  @Prop()
  isDiscountInPercentage: boolean;
}

export const BillingItemSchema = BaseSchema.createForClass(BillingItem);
export const BillingItemImpl = {
  name: BillingItem.name,
  BillingItemSchema,
};
