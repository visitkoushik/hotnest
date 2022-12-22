import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';
import { UserType } from './enum/UserType';

class Menu {
  constructor(public name: string, public value: string) {}
}
export class MetaData {
  private menuItems = [];

  private getMenuItem = () => {
    this.menuItems.push(new Menu('bill', 'Bills'));
    this.menuItems.push(new Menu('item', 'Items'));
    this.menuItems.push(new Menu('appsettings', 'App Settings'));
    this.menuItems.push(new Menu('config', 'Configure'));
    this.menuItems.push(new Menu('reports', 'Reports'));
    this.menuItems.push(new Menu('employee', 'Employee'));
    this.menuItems.push(new Menu('customer', 'Customer'));
    this.menuItems.push(new Menu('logout', 'Logout'));
    this.menuItems.push(new Menu('login', 'Login'));

    // new Menu('appsettings', 'App Settingd'),
    return this.menuItems;
  };

  private genders = Object.keys(Genders).map((name) => {
    return {
      name,
      value: Genders[name as keyof typeof Genders],
    };
  });

  private roles = Object.keys(Roles).map((name) => {
    return {
      name,
      value: Roles[name as keyof typeof Roles],
    };
  });

  private userType = Object.keys(UserType).map((name) => {
    return {
      name,
      value: UserType[name as keyof typeof UserType],
    };
  });

  getMenu(): any {
    return {
      menuItems: this.getMenuItem(),
      genders: this.genders,
      roles: this.roles,
      usertype: this.userType,
    };
  }
}
