import { Module } from '@nestjs/common';
import { CustomerController } from '../controlers/customer.controller';
import { CustomerService } from '../services/customer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerImpl } from 'src/models/Customer';

@Module({
  imports: [MongooseModule.forFeature([CustomerImpl])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
