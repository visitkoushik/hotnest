import { Schema, InferSchemaType } from 'mongoose';

const schema = new Schema({
  categoryName: { type: String, required: true },
  available: { type: Boolean, require: true },
});

export type Category = InferSchemaType<typeof schema>;
export const CategoryImp = { name: 'Category', schema };
