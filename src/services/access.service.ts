import { Injectable } from '@nestjs/common';
import { Employee } from 'src/models/Employee';
import { Roles } from 'src/models/enum/Roles';

@Injectable()
export class AccessService {
  public accessList = {};

  constructor() {
    this.accessList[Roles.SUPERADMIN] = [
      'ITEM_POST',
      'ITEM_GET',
      'ITEM_PUT',
      'CATEGORY_POST',
      'CATEGORY_PUT',
      'CATEGORY_GET',
      'EMPLOYEE_POST',
      'EMPLOYEE_PUT',
      'EMPLOYEE_GET',
      'BILLING_POST',
      'BILLING_PUT',
      'BILLING_DELETE',
      'BILLING_GET',
      'CUSTOMER_POST',
      'CUSTOMER_PUT',
      'CUSTOMER_GET',
      'LOGIN_GET',
      'LOGIN_PUT',
      'LOGIN_POST',
      'CHAIN_GET',
      'CHAIN_PUT',
      'CHAIN_POST',

      'REPORT_READ',

      'TRANSACTION_GET',
      'TRANSACTION_PUT',
      'TRANSACTION_POST',
    ];

    this.accessList[Roles.ADMIN] = [
      'ITEM_POST',
      'ITEM_GET',
      'ITEM_PUT',
      'CATEGORY_POST',
      'CATEGORY_PUT',
      'CATEGORY_GET',
      'EMPLOYEE_POST',
      'EMPLOYEE_PUT',
      'EMPLOYEE_GET',
      'BILLING_POST',
      'BILLING_PUT',
      'BILLING_DELETE',
      'BILLING_GET',
      'CUSTOMER_POST',
      'CUSTOMER_PUT',
      'CUSTOMER_GET',
      'LOGIN_GET',
      'LOGIN_PUT',
      'LOGIN_POST',

      'REPORT_READ',
    ];
    this.accessList[Roles.CLIENT] = ['ITEM_GET', 'BILLING_GET', 'CATEGORY_GET'];
    this.accessList[Roles.EMP] = [
      'ITEM_GET',
      'CATEGORY_GET',
      'BILLING_POST',
      'BILLING_PUT',
      'BILLING_GET',
      'CUSTOMER_POST',
      'CUSTOMER_PUT',
      'CUSTOMER_GET',
    ];
    this.accessList[Roles.INVENTORYREAD] = [
      'ITEM_GET',
      'CATEGORY_GET',
      'BILLING_GET',
    ];

    this.accessList[Roles.READ] = [
      'ITEM_GET',
      'CATEGORY_GET',
      'EMPLOYEE_GET',
      'BILLING_GET',
      'CUSTOMER_GET',
    ];

    this.accessList[Roles.ZERO] = [];
  }
}
