import { Module } from '@nestjs/common';
import { ItemImpl } from 'src/models/Item';
import { ItemController } from '../controlers/item.controller';
import { ItemService } from '../services/item.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [MongooseModule.forFeature([ItemImpl]), EmployeeModule],
  controllers: [ItemController],
  exports: [ItemService],
  providers: [ItemService],
})
export class ItemModule {}
