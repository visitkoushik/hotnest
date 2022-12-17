import { Schema, InferSchemaType } from 'mongoose';
import { CustomerController } from 'src/modules/castomer/castomer.controller';
import { BillingItem } from './BillingItem';
import { Customer, CustomerImpl } from './Customer';
import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';

const schema = new Schema({
  billingItemIdList: { type: [String], required: true },
  billingDate: { type: Date, required: true },
  customerID: { type: String, required: true },
  billnumber: { type: Number, required: true },
  discount: { type: Number, required: false },
  isDiscountInPercentage: { type: Boolean, required: false },
});

export type Billing = InferSchemaType<typeof schema>;
export const billingImpl = { name: 'Billing', schema };
