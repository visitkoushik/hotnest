import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { BaseController } from 'src/appServices/BaseControler';
import { Billing } from 'src/models/Billing';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController extends BaseController<Billing, BillingService> {
  constructor(private readonly appService: BillingService) {
    super(appService);
  }
}
