import { Module } from '@nestjs/common';
import { ItemController } from './Item.controller';
import { ItemService } from './Item.service';

@Module({
  imports: [],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
