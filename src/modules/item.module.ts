import { Module } from '@nestjs/common';
import { ItemImpl } from 'src/models/Item';
import { ItemController } from '../controlers/item.controller';
import { ItemService } from '../services/item.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([ItemImpl])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
