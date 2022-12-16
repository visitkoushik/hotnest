import { Module } from '@nestjs/common';
import { BillingController } from './categor.controller';
import { BillingService } from './categor.service';

@Module({
  imports: [],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
