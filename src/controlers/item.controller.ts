import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Item } from 'src/models/Item';
import { ItemService } from '../services/item.service';

@Controller('item')
export class ItemController extends BaseController<Item, ItemService> {
  async onAdd(item: Item) {
    if (item.available == null || item.available == undefined) {
      item.available = true;
    }
    return item;
  }
  constructor(private readonly moduleService: ItemService) {
    super(moduleService);
  }
}
