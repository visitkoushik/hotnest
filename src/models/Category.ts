import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from './BaseEntity';
import { BaseSchema } from './BaseSchema';
import { Genders } from './enum/Genders';

export type CategoryDocument = Category & Document;

@Schema()
export class Category extends BaseEntity {
  @Prop({ required: true, maxlength: 30 })
  categoryName: string;

  @Prop({ require: true })
  available: boolean;

  @Prop()
  categoryDiscount: number;
  @Prop()
  discountInPercent: boolean;
}

export const CategorySchema = BaseSchema.createForClass(Category);
export const CategoryImpl = { name: Category.name, schema: CategorySchema };
