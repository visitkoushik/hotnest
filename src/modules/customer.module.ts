import { Module } from '@nestjs/common';
import { CustomerController } from '../controlers/customer.controller';
import { CustomerService } from '../services/customer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerImpl } from 'src/models/Customer';
import { EmployeeModule } from './employee.module';
import { AccessService } from 'src/services/access.service';

@Module({
  imports: [MongooseModule.forFeature([CustomerImpl]), EmployeeModule],
  controllers: [CustomerController],
  exports: [CustomerService],
  providers: [CustomerService, AccessService],
})
export class CustomerModule {}
