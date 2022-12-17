import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from './BaseSchema';

export type ItemDocument = Item & Document;
@Schema()
export class Item {
  @Prop({ required: true, maxlength: 30 })
  itemName: string;

  @Prop({ maxlength: 60 })
  description: string;

  @Prop({ required: true })
  category_ids: Array<string>;

  @Prop({ required: true })
  priceAmount: number;

  @Prop({ required: true })
  sellingAmount: number;

  @Prop({ require: true })
  available: boolean;
}

export const schema = BaseSchema.createForClass(Item);

export const ItemImpl = { name: Item.name, schema };
