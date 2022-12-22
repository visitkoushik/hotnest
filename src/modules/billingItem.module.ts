import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillingItemImpl } from 'src/models/BillingItem';
import { BillingController } from '../controlers/billing.controller';
import { BillingItemService } from '../services/billingItem.service';

@Module({
  imports: [MongooseModule.forFeature([BillingItemImpl])],
  controllers: [BillingController],
  providers: [BillingItemService],
})
export class BillingModule {}
