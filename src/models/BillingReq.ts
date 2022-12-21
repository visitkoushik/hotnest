import { BillingItem } from 'src/models/BillingItem';
import { Person } from 'src/models/Person';
import { Customer } from './Customer';

export class BillingReq extends Person {
  billingItemList: BillingItem[];

  billingDate: Date;

  billNumber: string;

  discount: number;

  isDiscountInPercentage: boolean;

  Ptotal: number;

  Stotal: number;

  castomerInfo: Customer;
}
