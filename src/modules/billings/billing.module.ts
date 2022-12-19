import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { billingImpl } from 'src/models/Billing';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
  imports: [MongooseModule.forFeature([billingImpl])],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
