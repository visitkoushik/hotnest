import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Category } from 'src/models/Category';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { Item } from 'src/models/Item';
import { AccessService } from 'src/services/access.service';
import { ItemService } from '../services/item.service';
import { Request, Response } from 'express';
import { CategoryService } from 'src/services/categor.service';

import * as mongoose from 'mongoose';

@Controller('item')
export class ItemController extends BaseController<Item, ItemService> {
  @Inject(CategoryService)
  private readonly categoryService: CategoryService;
  async onRequest(headers: any, mode: ModeOperation): Promise<boolean> {
    const authCode = headers['auth-code'];
    const r: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[r.toString().toUpperCase()];

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

  async findAllAsQuery(response: Response, request: Request) {
    const available: boolean | null =
      request.query.available === 'true'
        ? true
        : request.query.available === 'false'
        ? false
        : null;

    let filter_stage = {};
    if (available != null) {
      filter_stage = {
        available: {
          $eq: true,
        },
      };
    }
    const listCategories = (
      await this.categoryService.findAll(filter_stage, false, 'id')
    ).responseObject; //?.map((e) => e.id);

    const listOfIDOfActiveCategory = listCategories.map((e: any) =>
      e._id.toString(),
    );

    filter_stage = {
      available: {
        $eq: true,
      },
      category: { $in: listOfIDOfActiveCategory },
    };

    super.findAllAsQuery(response, request, filter_stage);
  }
}
