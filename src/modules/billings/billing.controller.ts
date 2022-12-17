import { Controller, Get } from '@nestjs/common';
import { Billing } from 'src/models/Billing';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
  constructor(private readonly appService: BillingService) {}

  @Get('list')
  findAll(): Billing[] {
    return this.appService.findAll('hgg');
  }
}
