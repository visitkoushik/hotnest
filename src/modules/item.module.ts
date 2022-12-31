import { Module } from '@nestjs/common';
import { ItemImpl } from 'src/models/Item';
import { ItemController } from '../controlers/item.controller';
import { ItemService } from '../services/item.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee.module';
import { AccessService } from 'src/services/access.service';
import { CategoryModule } from './categor.module';
import { CategoryService } from 'src/services/categor.service';

@Module({
  imports: [
    MongooseModule.forFeature([ItemImpl]),
    EmployeeModule,
    CategoryModule,
  ],
  controllers: [ItemController],
  exports: [ItemService],
  providers: [ItemService, AccessService],
})
export class ItemModule {}
