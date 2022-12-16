import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/appServices/baseService';
import { Billing } from 'src/models/Billing';

@Injectable()
export class BillingService implements BaseService<Billing> {
  findAll<Billing>(authKey: string): Billing[] {
    const list: Billing[] = [] as Billing[];
    return list;
  }
}
