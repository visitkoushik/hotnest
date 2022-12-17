import { Controller, Get, Post, Body } from '@nestjs/common';
import { BaseController } from 'src/appServices/BaseControler';
import { Category } from 'src/models/Category';
import { CategoryService } from './categor.service';

@Controller('category')
export class CategoryController extends BaseController<
  Category,
  CategoryService
> {
  constructor(private readonly moduleService: CategoryService) {
    super(moduleService);
  }

  onAdd(record: Category) {
    record.available = true;
    return record;
  }
}
