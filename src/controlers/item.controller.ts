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
import { HeaderState } from 'src/models/enum/HeaderState';
import { BranchService } from 'src/services/branch.service';
import { AppResponse } from 'src/models/AppResponse';
import { Branch } from 'src/models/Branch';

@Controller('item')
export class ItemController extends BaseController<Item, ItemService> {
  @Inject(CategoryService)
  private readonly categoryService: CategoryService;
  @Inject(BranchService)
  private readonly branchService: BranchService;
  async onRequest(headers: any, mode: ModeOperation): Promise<HeaderState> {
    const authCode = headers['auth-code'];
    const r: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[r.toString().toUpperCase()];

    return listOfPrev.findIndex(
      (e: string) =>
        e == Item.name.toUpperCase() + '_' + mode.toString().toUpperCase(),
    ) > -1
      ? HeaderState.TRUE
      : HeaderState.FALSE;
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
    let items: string[] = [];
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
          $eq: available,
        },
      };

      const listCategories = (
        await this.categoryService.findAll(filter_stage, false, 'id')
      ).responseObject; //?.map((e) => e.id);
      if (this.branchCode !== '0') {
        const respItem: AppResponse<Branch> =
          await this.branchService.findByBranchCode(this.branchCode);

        items = respItem.responseObject?.items || [];
      }
      const listOfIDOfActiveCategory = listCategories.map((e: any) =>
        e._id.toString(),
      );

      if (this.branchCode !== '0') {
        filter_stage = {
          available: {
            $eq: available,
          },
          category: { $in: listOfIDOfActiveCategory },
          _id: { $in: [...items] },
        };
      } else {
        filter_stage = {
          available: {
            $eq: available,
          },
          category: { $in: listOfIDOfActiveCategory },
        };
      }
    }
    super.findAllAsQuery(response, request, filter_stage);
  }
}
