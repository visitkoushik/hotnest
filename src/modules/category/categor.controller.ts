import { Controller, Get, Post, Body } from '@nestjs/common';
import { Category } from 'src/models/Category';
import { CategoryService } from './categor.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly moduleService: CategoryService) {}

  // @Get('list')
  // findAll(): Category[] {
  //   return this.appService.findAll('hgg');
  // }

  @Post('add')
  addCategory(@Body() category: Category): any {
    category.available = true;
    const generatedResult = this.moduleService.insert(
      category.categoryName,
      category.available,
    );
    return generatedResult;
  }
}
