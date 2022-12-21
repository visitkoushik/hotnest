import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { billingImpl } from 'src/models/Billing';
import { CustomerImpl } from 'src/models/Customer';
import { CustomerService } from '../castomer/castomer.service';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
  imports: [MongooseModule.forFeature([billingImpl, CustomerImpl])],
  controllers: [BillingController],
  providers: [BillingService, CustomerService],
})
export class BillingModule {}
