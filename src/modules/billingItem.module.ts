import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillingItemImpl } from 'src/models/BillingItem';
import { BillingController } from '../controlers/billing.controller';
import { BillingItemService } from '../services/billingItem.service';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [MongooseModule.forFeature([BillingItemImpl]), EmployeeModule],
  controllers: [BillingController],
  exports: [BillingItemService],
  providers: [BillingItemService],
})
export class BillingModule {}
