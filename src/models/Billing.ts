import { BaseEntity } from './BaseEntity';
import { Customer } from './Customer';
import { Item } from './Item';

export class Billing extends BaseEntity {
  public itemList: Item[] = [] as Item[];
  public billingDate: Date;
  public customer: Customer;
  public billnumber: number;

  constructor(itemList: Item[], billingDate: Date, customer: Customer) {
    super();
    this.itemList = [...itemList];
    this.billingDate = billingDate;
    this.customer = { ...customer };
  }
}
