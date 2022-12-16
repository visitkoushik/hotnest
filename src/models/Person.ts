import { BaseEntity } from './BaseEntity';
import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';

export class Person extends BaseEntity {
  public firstName: string;
  public lastName: string;
  public middleName: string;
  public gender: Genders;
  public mobileNumbers: string;
  public email: string;
  public roles: Roles;
  public dateOfBirth: Date;
  public primaryAddressIndex: number;

  constructor() {
    super();
  }
}
