import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';
import { UserType } from './enum/UserType';

class Menu {
  constructor(public name: string, public value: string) {}
}
export class MetaData {
  private menuItems = [];
  private accessList = {};
  constructor(public ownerNeedtocreate, public rolesShared: Roles) {
    this.accessList[Roles.SUPERADMIN] = [
      'ITEM_ADD',
      'ITEM_READ',
      'ITEM_UPDATE',
      'CATEGORY_ADD',
      'CATEGORY_UPDATE',
      'CATEGORY_READ',
      'EMPLOYEE_ADD',
      'EMPLOYEE_UPDATE',
      'EMPLOYEE_READ',
      'BILLING_ADD',
      'BILLING_UPDATE',
      'BILLING_READ',
      'CUSTOMER_ADD',
      'CUSTOMER_UPDATE',
      'CUSTOMER_READ',
      'LOGIN_READ',
      'LOGIN_UPDATE',
      'LOGIN_ADD',
    ];

    this.accessList[Roles.ADMIN] = [
      'ITEM_ADD',
      'ITEM_READ',
      'ITEM_UPDATE',
      'CATEGORY_ADD',
      'CATEGORY_UPDATE',
      'CATEGORY_READ',
      'EMPLOYEE_READ',
      'BILLING_ADD',
      'BILLING_UPDATE',
      'BILLING_READ',
      'CUSTOMER_ADD',
      'CUSTOMER_UPDATE',
      'CUSTOMER_READ',
      'LOGIN_READ',
    ];
    this.accessList[Roles.CLIENT] = [
      'ITEM_READ',
      'BILLING_READ',
      'CATEGORY_READ',
    ];
    this.accessList[Roles.EMP] = [
      'ITEM_READ',
      'CATEGORY_READ',
      'BILLING_ADD',
      'BILLING_UPDATE',
      'BILLING_READ',
      'CUSTOMER_ADD',
      'CUSTOMER_UPDATE',
      'CUSTOMER_READ',
    ];
    this.accessList[Roles.INVENTORYREAD] = [
      'ITEM_READ',
      'CATEGORY_READ',
      'BILLING_READ',
    ];

    this.accessList[Roles.READ] = [
      'ITEM_READ',
      'CATEGORY_READ',
      'EMPLOYEE_READ',
      'BILLING_READ',
      'CUSTOMER_READ',
    ];

    this.accessList[Roles.ZERO] = [];
  }
  private getMenuItem = () => {
    this.menuItems.push(new Menu('appsettings', 'App Settings'));
    this.menuItems.push(new Menu('login', 'Login'));
    if (this.ownerNeedtocreate) {
      this.menuItems.push(new Menu('emp', 'Employee'));
    } else if (!this.ownerNeedtocreate) {
      if (
        this.rolesShared == Roles.SUPERADMIN ||
        this.rolesShared == Roles.ADMIN
      ) {
        this.menuItems.push(new Menu('reports', 'Reports'));
        this.menuItems.push(new Menu('customer', 'Customer'));
        this.menuItems.push(new Menu('config', 'Configure'));
        this.menuItems.push(new Menu('emp', 'Employee'));
        this.menuItems.push(new Menu('bill', 'Bills'));
        this.menuItems.push(new Menu('item', 'Items'));
        this.menuItems.push(new Menu('logout', 'Logout'));
      }
      if (this.rolesShared == Roles.EMP) {
        this.menuItems.push(new Menu('bill', 'Bills'));
        this.menuItems.push(new Menu('item', 'Items'));
        this.menuItems.push(new Menu('config', 'Configure'));
        this.menuItems.push(new Menu('logout', 'Logout'));
      }
      if (this.rolesShared !== Roles.ZERO) {
        this.menuItems.push(new Menu('profile', 'Profile'));
      }
    }
    return this.menuItems;
  };

  private genders =
    !this.ownerNeedtocreate && this.rolesShared == Roles.ZERO
      ? []
      : Object.keys(Genders).map((name) => {
          return {
            name,
            value: Genders[name as keyof typeof Genders],
          };
        });

  private roles =
    !this.ownerNeedtocreate && this.rolesShared == Roles.ZERO
      ? []
      : Object.keys(Roles).map((name) => {
          if (this.ownerNeedtocreate) {
            //   console.log(name != Roles.SUPERADMIN.toString());
            if (name != Roles.SUPERADMIN.toString()) {
              return;
            }
          }
          return {
            name,
            value: Roles[name as keyof typeof Roles],
          };
        });

  private userType =
    !this.ownerNeedtocreate && this.rolesShared == Roles.ZERO
      ? []
      : Object.keys(UserType).map((name) => {
          if (this.ownerNeedtocreate) {
            if (name != UserType.OWNER.toString()) {
              return;
            }
          }
          return {
            name,
            value: UserType[name as keyof typeof UserType],
          };
        });

  getMenu(): any {
    return {
      menuItems: this.getMenuItem().filter((f) => f != null),
      genders: this.genders.filter((f) => f != null),
      roles: this.roles.filter((f) => f != null),
      userType: this.userType.filter((f) => f != null),
      ownerNeedtocreate: this.ownerNeedtocreate,
      accessRight: this.accessList[this.rolesShared],
    };
  }
}
