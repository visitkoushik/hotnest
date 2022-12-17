import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from './BaseSchema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true, maxlength: 30 })
  categoryName: string;

  @Prop({ require: true })
  available: boolean;
}

export const schema = BaseSchema.createForClass(Category);
export const CategoryImpl = { name: Category.name, schema };
