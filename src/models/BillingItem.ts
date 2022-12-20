import { Schema, Prop } from '@nestjs/mongoose';
import { BaseSchema } from './BaseSchema';
import * as mongoose from 'mongoose';
import { Item } from './Item';

@Schema()
export class BillingItem {
  @Prop({
    ref: Item.name,
    required: [true, 'Item id required'],
  })
  item: mongoose.Schema.Types.ObjectId;
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
