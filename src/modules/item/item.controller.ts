import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseController } from 'src/appServices/BaseControler';
import { Item } from 'src/models/Item';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController extends BaseController<Item, ItemService> {
  constructor(private readonly moduleService: ItemService) {
    super(moduleService);
  }

  onAdd(item: Item) {
    item.available = true;
    return item;
  }
}
