import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingModule } from './modules/billing.module';
import { CustomerModule } from './modules/customer.module';
import { CategoryModule } from './modules/categor.module';
import { EmployeeModule } from './modules/employee.module';
import { ItemModule } from './modules/item.module';
import { LoginRegisterModule } from './modules/login-register.module';

import { MongooseModule } from '@nestjs/mongoose';
import { MetadataController } from './controlers/metadata.controller';
import { MetaDataModule } from './modules/metadata.module';
import { LoginImpl } from './models/Login';
import { AccessService } from './services/access.service';

import { ReportsController } from './controlers/reports.controller';
import { ReportsModule } from './modules/reports.module';
import { ReportService } from './services/report.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BranchModule } from './modules/branch.module';
// mongodb+srv://hotnest:Passw0rd2022@cluster0.9fdjzyb.mongodb.net/?retryWrites=true&w=majority
@Module({
  imports: [
    CategoryModule,
    ItemModule,
    LoginRegisterModule,
    CustomerModule,
    EmployeeModule,
    BillingModule,
    MetaDataModule,
    ReportsModule,
    BranchModule,
    MongooseModule.forRootAsync({
      useFactory: async () => {
        return {
          uri: 'mongodb+srv://hotnest:D0Ou3CmA0ouah0r2@cluster-hotnet.qtxxdxy.mongodb.net/default?retryWrites=true&w=majority',
          // Loaded from .ENV
          // uri: process.env['MONOGO_DB'],
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AccessService, ReportService],
  exports: [AccessService],
})
export class AppModule {}
