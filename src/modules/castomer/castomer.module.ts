import { Module } from '@nestjs/common';
import { CustomerController } from './castomer.controller';
import { CustomerService } from './castomer.service';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
