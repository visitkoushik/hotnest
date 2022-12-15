import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly appService: ItemService) {}

  @Get('list')
  findAll(): string {
    return this.appService.findAll();
  }
}
