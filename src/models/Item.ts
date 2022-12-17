import { Schema, InferSchemaType, Types } from 'mongoose';

const schema = new Schema({
  itemName: { type: String, required: true },
  description: { type: String, required: false },
  category_ids: { type: [String], required: true },
  priceAmount: { type: String, required: true },
  sellingAmount: { type: String, required: true },
  available: { type: Boolean, require: true },
});

export type Item = InferSchemaType<typeof schema>;
export const ItemImpl = { name: 'Item', schema };
