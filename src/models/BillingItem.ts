import { Schema, InferSchemaType } from 'mongoose';

const schema = new Schema({
  itemId: { type: String, required: true },
  priceAmount: { type: Number, required: true },
  sellingAmount: { type: Number, required: true },
  discount: { type: Number, required: false },
  isDiscountInPercentage: { type: Boolean, required: false },
});

export type BillingItem = InferSchemaType<typeof schema>;
export const BillingItemImp = { name: 'BillingItem', schema };
