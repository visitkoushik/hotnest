import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';
import { UserType } from './enum/UserType';
import { Login } from './Login';
import { Person } from './Person';
import { Prop, Schema } from '@nestjs/mongoose';

import { BaseSchema } from './BaseSchema';

export type EmployeeDocument = Employee & Document;

@Schema()
class Employee extends Person {
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

export const schema = BaseSchema.createForClass(Employee);
export const CustomerImpl = { name: Employee.name, schema };
