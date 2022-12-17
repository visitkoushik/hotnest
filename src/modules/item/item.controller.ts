import { Body, Controller, Get, Post } from '@nestjs/common';
import { Item } from 'src/models/Item';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly moduleService: ItemService) {}

  @Post('add')
  addCategory(@Body() item: Item): any {
    item.available = true;
    const generatedResult = this.moduleService.insert(item);
    return generatedResult;
  }
}
