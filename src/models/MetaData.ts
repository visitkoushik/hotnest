import { AccessService } from 'src/services/access.service';
import { Genders } from './enum/Genders';
import { Roles } from './enum/Roles';
import { UserType } from './enum/UserType';

class Menu {
  constructor(public name: string, public value: string) {}
}
export class MetaData {
  private menuItems = [];
  private accessList = {};

  constructor(
    public ownerNeedtocreate,
    public rolesShared: Roles,
    public accessService: AccessService,
  ) {
    const keys: string[] = Object.keys(this.accessService.accessList);

    keys.forEach((k) => {
      this.accessList[k] = this.accessService.accessList[k].map((m) => {
        return m
          .replace('_POST', '_ADD')
          .replace('_PUT', '_UPDATE')
          .replace('_GET', '_READ');
      });
    });
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
