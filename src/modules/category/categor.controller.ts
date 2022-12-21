import { Controller, Get, Post, Body } from '@nestjs/common';
import { BaseController } from 'src/appServices/BaseControler';
import { Category } from 'src/models/Category';
import { Genders } from 'src/models/enum/Genders';
import { CategoryService } from './categor.service';

@Controller('category')
export class CategoryController extends BaseController<
  Category,
  CategoryService
> {
  async onAdd(record: Category) {
    if (record.available == undefined || record.available == null) {
      record.available = true;
    }
    record.available = true;
    record.gender = Genders.OTHERS;
    return record;
  }
  constructor(private readonly moduleService: CategoryService) {
    super(moduleService);
  }
}
