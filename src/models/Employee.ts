import { Person } from './Person';
import { Roles } from './enum/Roles';
import { Genders } from './enum/Genders';
import { Login } from './Login';

export class Employee extends Person {
  public salary: number;
  public isCurrent: boolean;
  public login: Login;
  constructor(
    firstName: string,
    lastName: string,
    middleName: string,
    gender: Genders,
    mobileNumbers: string,
    email: string,
    roles: Roles,
    dateOfBirth: Date,
    primaryAddressIndex: number,
    login: Login,
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
    this.login = { ...login };
  }
}
