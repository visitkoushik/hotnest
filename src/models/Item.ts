import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BaseEntity } from './BaseEntity';
import { BaseSchema } from './BaseSchema';
import { Category } from './Category';
import { ItemPrice } from './ItemPrice';

export type ItemDocument = Item & mongoose.Document;
@Schema()
export class Item extends BaseEntity {
  @Prop({ required: true, maxlength: 30 })
  itemName: string;

  @Prop({ maxlength: 60 })
  description: string;

  @Prop({
    ref: Category.name,
  })
  category: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  itemPrice: ItemPrice;

  @Prop({ require: true })
  available: boolean;
}

export const ItemSchema = BaseSchema.createForClass(Item);

export const ItemImpl = { name: Item.name, schema: ItemSchema };
