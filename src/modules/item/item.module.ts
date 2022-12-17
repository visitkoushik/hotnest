import { Module } from '@nestjs/common';
import { ItemImpl } from 'src/models/Item';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([ItemImpl])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
