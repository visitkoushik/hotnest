import { Schema, InferSchemaType } from 'mongoose';
import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  middleName: { type: String, required: false },
  mobileNumbers: { type: String, required: false },
  email: { type: String, required: false },
  primaryAddressIndex: { type: Number, required: false },
  gender: {
    type: String,
    enum: Genders,
    default: Genders.MALE,
    required: true,
  },
  roles: { type: String, enum: Roles, default: Roles.CLIENT, required: true },
  dateOfBirth: { type: Date, required: false },
});

export type Customer = InferSchemaType<typeof schema>;
export const CustomerImpl = { name: 'Customer', schema };
