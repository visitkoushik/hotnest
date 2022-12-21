import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { BillingItemImpl } from 'src/models/BillingItem'; 
import { BillingController } from '../billings/billing.controller'; 
import { BillingItemService } from './billingItem.service';

@Module({
  imports: [MongooseModule.forFeature([BillingItemImpl])],
  controllers: [BillingController],
  providers: [BillingItemService],
})
export class BillingModule {}
