import { Prop, Schema } from '@nestjs/mongoose';

import { BaseSchema } from './BaseSchema';
import { Person } from './Person';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer extends Person {}

export const CustomerSchema = BaseSchema.createForClass(Customer);
export const CustomerImpl = { name: Customer.name, schema: CustomerSchema };
