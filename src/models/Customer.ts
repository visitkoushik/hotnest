import { Prop, Schema } from '@nestjs/mongoose';
import { truncateSync } from 'fs';
import { BaseSchema } from './BaseSchema';
import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({ required: true, maxlength: 15 })
  firstName: string;
  @Prop({ required: false, maxlength: 15 })
  lastName: string;
  @Prop({ required: false, maxlength: 15 })
  middleName: string;
  @Prop({ required: false, maxlength: 10 })
  mobileNumbers: string;
  @Prop({ required: false, maxlength: 25 })
  email: string;
  @Prop({ required: false })
  primaryAddressIndex: number;
  @Prop({ required: true })
  gender: Genders;
  @Prop({ required: true })
  roles: Roles;
  @Prop({ required: false })
  dateOfBirth: Date;
}

export const schema = BaseSchema.createForClass(Customer);
export const CustomerImpl = { name: Customer.name, schema };
