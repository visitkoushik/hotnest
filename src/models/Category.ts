// import { Schema, InferSchemaType } from 'mongoose';
// import { BaseSchema } from './BaseSchema';

// const schema = new BaseSchema({
//   categoryName: { type: String, required: true },
//   available: { type: Boolean, require: true },
// });

// export type Category = InferSchemaType<typeof schema>;
// export const CategoryImp = { name: 'Category', schema };

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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
export const CategoryImp = { name: Category.name, schema };
