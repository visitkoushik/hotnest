import { Module } from '@nestjs/common';
import { ReportsController } from 'src/controlers/reports.controller';
import { AccessService } from 'src/services/access.service';
import { BillingModule } from './billing.module';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [EmployeeModule, BillingModule],
  controllers: [ReportsController],
  providers: [AccessService],
})
export class ReportsModule {}
