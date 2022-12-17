import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/appServices/BaseServices';
import { Billing } from 'src/models/Billing';

@Injectable()
export class BillingService {
  findAll<Billing>(authKey: string): Billing[] {
    const list: Billing[] = [] as Billing[];
    return list;
  }
}
