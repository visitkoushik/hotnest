import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingModule } from './modules/billings/categor.module';
import { CustomerModule } from './modules/castomer/castomer.module';
import { CategoryModule } from './modules/category/categor.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ItemModule } from './modules/item/item.module';
import { LoginRegisterModule } from './modules/login/login-register.module';

@Module({
  imports: [
    CategoryModule,
    ItemModule,
    LoginRegisterModule,
    CustomerModule,
    EmployeeModule,
    BillingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
