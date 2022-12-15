import { Person } from './Person';
import { Roles } from './Roles';

export class Employee extends Person {
  public salary: number;
  constructor(
    firstName: string,
    lastName: string,
    middleName: string,
    gender: string,
    mobileNumbers: string,
    email: string,
    roles: Roles,
    dateOfBirth: Date,
    primaryAddressIndex: number,
  ) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.gender = gender;
    this.email = email;
    this.mobileNumbers = mobileNumbers;
    this.roles = roles;
    this.dateOfBirth = dateOfBirth;
    this.primaryAddressIndex = primaryAddressIndex;
  }
}
