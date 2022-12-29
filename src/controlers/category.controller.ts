import { Controller, Get, Post, Body } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Category } from 'src/models/Category';
import { Genders } from 'src/models/enum/Genders';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { AccessService } from 'src/services/access.service';
import { CategoryService } from '../services/categor.service';

@Controller('category')
export class CategoryController extends BaseController<
  Category,
  CategoryService
> {
  async onRequest(headers: any, mode: ModeOperation): Promise<boolean> {
    const authCode = headers['auth-code'];
    const r: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[r.toString().toUpperCase()];
    console.log(r.toString().toUpperCase(), listOfPrev);
    return (
      listOfPrev.findIndex(
        (e: string) =>
          e ==
          Category.name.toUpperCase() + '_' + mode.toString().toUpperCase(),
      ) > -1
    );
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
}
