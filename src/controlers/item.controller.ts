import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Category } from 'src/models/Category';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { Item } from 'src/models/Item';
import { AccessService } from 'src/services/access.service';
import { ItemService } from '../services/item.service';

@Controller('item')
export class ItemController extends BaseController<Item, ItemService> {
  async onRequest(headers: any, mode: ModeOperation): Promise<boolean> {
    const authCode = headers['auth-code'];
    const r: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[r.toString().toUpperCase()];
    console.log(r.toString().toUpperCase(), listOfPrev);
    return (
      listOfPrev.findIndex(
        (e: string) =>
          e == Item.name.toUpperCase() + '_' + mode.toString().toUpperCase(),
      ) > -1
    );
  }
  async onAdd(item: Item) {
    if (item.available == null || item.available == undefined) {
      item.available = true;
    }
    return item;
  }
  constructor(
    private readonly moduleService: ItemService,
    private readonly accessService: AccessService,
  ) {
    super(moduleService);
  }
}
