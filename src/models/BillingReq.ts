import { BillingItem } from 'src/models/BillingItem';
import { Person } from 'src/models/Person';
import { Customer } from './Customer';

export class BillingReq {
  billingItemList: BillingItem[];

  billingDate: string;

  billNumber: string;

  discount: number;

  isDiscountInPercentage: boolean;

  Ptotal: number;

  Stotal: number;

  customer: Customer;

  itemCount: number;

  paid: number;

  tax: number;

  id?: string;
}
