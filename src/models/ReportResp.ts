import { BillingReport } from './BillingReport';

export class ReportResp {
  billingReport: BillingReport[] = [];
  items: any;
  profit: number;
  totalSell: number;
  totalCost: number;
  unPaid: number;
  tax: number;
}

export class ItemReport {
  discount: number;
  priceAmount: number;
  sellingAmount: number;
  itemCount: number;
  total: number;
  itemName: string;
  itemID: string;
}
export class ItemWiseReport {
  date: string;
  discount: number;
  priceAmount: number;
  sellingAmount: number;
  itemCount: number;
  total: number;
  itemName: string;
  itemID: string;
}
