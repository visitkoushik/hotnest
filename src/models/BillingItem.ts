import { Schema, Prop } from '@nestjs/mongoose';
import { BaseSchema } from './BaseSchema';
import * as mongoose from 'mongoose';
import { Item } from './Item';
import { BaseEntity } from './BaseEntity';
import { Exclude } from 'class-transformer';

export type BillingItemDocument = BillingItem & mongoose.Document;
@Schema()
export class BillingItem extends BaseEntity {
  @Prop({ required: true })
  itemID: string;
  @Prop({ required: true })
  itemName: string;
  @Prop({ required: false })
  description: string;
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

  @Exclude()
  @Prop({ default: new Date().toISOString() })
  date: Date;
}

export const BillingItemSchema = BaseSchema.createForClass(BillingItem);
export const BillingItemImpl = {
  name: BillingItem.name,
  schema: BillingItemSchema,
};
