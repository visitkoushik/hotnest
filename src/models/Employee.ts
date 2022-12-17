import { Schema, InferSchemaType } from 'mongoose';
import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';
import { Login } from './Login';

const schema = new Schema({
  salary: { type: Number, required: true },
  isCurrent: { type: Boolean, required: true },
  loginID: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String, required: false },
  gender: { type: Genders, required: true },
  mobileNumbers: { type: String, required: true },
  email: { type: String, required: true },
  roles: { type: Roles, required: true },
  dateOfBirth: { type: Date, required: true },
  primaryAddressIndex: { type: Number, required: true },
});

export type Employee = InferSchemaType<typeof schema>;
export const EmployeeImp = { name: 'Employee', schema };
