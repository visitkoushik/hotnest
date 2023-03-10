import { Person } from './Person';
import { Prop, Schema } from '@nestjs/mongoose';

import { BaseSchema } from './BaseSchema';
import { Login } from './Login';
import mongoose from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee extends Person {
  @Prop({ required: true })
  dateOfBirth: Date;
  @Prop({ required: false })
  dateOfExist: Date;
  @Prop({ required: true })
  dateOfJoin: Date;
  @Prop({ required: true })
  salary: number;
  @Prop({ required: true })
  isCurrent: boolean;

  @Prop({ ref: Login.name, required: false })
  login: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  branchCode: string;
}

export const EmployeeSchema = BaseSchema.createForClass(Employee);
export const EmployeeImpl = { name: Employee.name, schema: EmployeeSchema };
