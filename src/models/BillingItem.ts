import { Schema, Prop } from '@nestjs/mongoose';
import { BaseSchema } from './BaseSchema';

// @Schema()
export class BillingItem {
  itemId: string;
  priceAmount: number;
  sellingAmount: number;
  itemCount: number;
  discount: number;
  isDiscountInPercentage: boolean;
}

// export const schema = BaseSchema.createForClass(BillingItem);
// export const billingItemImp = { name: BillingItem.name, schema };
