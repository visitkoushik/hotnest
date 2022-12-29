import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { billingImpl } from 'src/models/Billing';
import { BillingController } from '../controlers/billing.controller';
import { BillingService } from '../services/billing.service';
import { CustomerModule } from './customer.module';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [
    MongooseModule.forFeature([billingImpl]),
    CustomerModule,
    EmployeeModule,
  ],
  controllers: [BillingController],
  exports: [BillingService],
  providers: [BillingService],
})
export class BillingModule {}
