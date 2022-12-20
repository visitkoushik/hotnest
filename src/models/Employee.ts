import { Person } from './Person';
import { Prop, Schema } from '@nestjs/mongoose';

import { BaseSchema } from './BaseSchema';

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
}

export const EmployeeSchema = BaseSchema.createForClass(Employee);
export const EmployeeImpl = { name: Employee.name, schema: EmployeeSchema };
