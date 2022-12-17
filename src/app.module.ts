import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingModule } from './modules/billings/billing.module';
import { CustomerModule } from './modules/castomer/castomer.module';
import { CategoryModule } from './modules/category/categor.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ItemModule } from './modules/item/item.module';
import { LoginRegisterModule } from './modules/login/login-register.module';

import { MongooseModule } from '@nestjs/mongoose';
// mongodb+srv://hotnest:Passw0rd2022@cluster0.9fdjzyb.mongodb.net/?retryWrites=true&w=majority
@Module({
  imports: [
    CategoryModule,
    ItemModule,
    LoginRegisterModule,
    CustomerModule,
    EmployeeModule,
    BillingModule,
    MongooseModule.forRoot(
      'mongodb+srv://hotnest:D0Ou3CmA0ouah0r2@cluster-hotnet.qtxxdxy.mongodb.net/test?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
