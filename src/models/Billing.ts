import { Schema, InferSchemaType } from 'mongoose';
import { BaseSchema } from './BaseSchema';

const schema = new BaseSchema({
  billingItemIdList: { type: [String], required: true },
  billingDate: { type: Date, required: true },
  customerID: { type: String, required: true },
  billnumber: { type: Number, required: true },
  discount: { type: Number, required: false },
  isDiscountInPercentage: { type: Boolean, required: false },
});

export type Billing = InferSchemaType<typeof schema>;
export const billingImpl = { name: 'Billing', schema };
