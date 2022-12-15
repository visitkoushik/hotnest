import { Roles } from './Roles';

export class Person {
  public firstName: string;
  public lastName: string;
  public middleName: string;
  public gender: string;
  public mobileNumbers: string;
  public email: string;
  public roles: Roles;
  public dateOfBirth: Date;
  public primaryAddressIndex: number;
}
