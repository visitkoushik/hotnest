import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';
import { Prop, Schema } from '@nestjs/mongoose';
import { UserType } from './enum/UserType';

export class Person {
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
  @Prop({ required: true })
  userType: UserType;
}
