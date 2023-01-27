import { Controller, Get, Post, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseController } from 'src/controlers/BaseControler';
import { Category } from 'src/models/Category';
import { Genders } from 'src/models/enum/Genders';
import { HeaderState } from 'src/models/enum/HeaderState';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { AccessService } from 'src/services/access.service';
import { CategoryService } from '../services/categor.service';

@Controller('category')
export class CategoryController extends BaseController<
  Category,
  CategoryService
> {
  async onRequest(headers: any, mode: ModeOperation): Promise<HeaderState> {
    const authCode = headers['auth-code'];
    const r: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[r.toString().toUpperCase()];

    return listOfPrev.findIndex(
      (e: string) =>
        e == Category.name.toUpperCase() + '_' + mode.toString().toUpperCase(),
    ) > -1
      ? HeaderState.TRUE
      : HeaderState.FALSE;
  }
  async onAdd(record: Category) {
    if (record.available == undefined || record.available == null) {
      record.available = true;
    }
    record.available = true;
    return record;
  }
  constructor(
    private readonly moduleService: CategoryService,
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
          $eq: available,
        },
      };
    }
    if (this.branchCode !== '0') {
      filter_stage = {
        ...filter_stage,
        branchCode: {
          $eq: this.branchCode,
        },
      };
    }
    super.findAllAsQuery(response, request, filter_stage);
  }
}
