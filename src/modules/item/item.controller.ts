import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseController } from 'src/appServices/BaseControler';
import { Item } from 'src/models/Item';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController extends BaseController<Item, ItemService> {
  async onAdd(item: Item) {
    item.available = true;
    return item;
  }
  constructor(private readonly moduleService: ItemService) {
    super(moduleService);
  }
}
