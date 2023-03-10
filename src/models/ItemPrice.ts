import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from './BaseEntity';
import { BaseSchema } from './BaseSchema';

export type ItemPriceDocument = ItemPrice & Document;
@Schema()
export class ItemPrice extends BaseEntity {
  @Prop({ required: true })
  priceAmount: number;

  @Prop({ required: true })
  sellingAmount: number;
}

export const ItemPriceSchema = BaseSchema.createForClass(ItemPrice);

export const ItemPriceImpl = { name: ItemPrice.name, schema: ItemPriceSchema };
