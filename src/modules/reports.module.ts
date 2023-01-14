import { Module } from '@nestjs/common';
import { ReportsController } from 'src/controlers/reports.controller';
import { AccessService } from 'src/services/access.service';
import { BillingService } from 'src/services/billing.service';
import { CategoryService } from 'src/services/categor.service';
import { ItemService } from 'src/services/item.service';
import { LoginRegisterService } from 'src/services/login-register.service';
import { ReportService } from 'src/services/report.service';
import { BillingModule } from './billing.module';
import { CategoryModule } from './categor.module';
import { CustomerModule } from './customer.module';
import { EmployeeModule } from './employee.module';
import { ItemModule } from './item.module';
import { LoginRegisterModule } from './login-register.module';

@Module({
  imports: [
    ItemModule,
    BillingModule,
    CategoryModule,
    EmployeeModule,
    CustomerModule,
    LoginRegisterModule,
  ],
  controllers: [ReportsController],
  providers: [AccessService, ReportService],
})
export class ReportsModule {}
