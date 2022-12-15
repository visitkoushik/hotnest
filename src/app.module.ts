import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './modules/castomer/castomer.module';
import { CategoryModule } from './modules/category/categor.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ItemModule } from './modules/item/item.module';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [
    CategoryModule,
    ItemModule,
    LoginModule,
    CustomerModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
