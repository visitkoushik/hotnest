import { Controller, Get } from '@nestjs/common';
import { Category } from 'src/models/Category';
import { CategoryService } from './categor.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly appService: CategoryService) {}

  @Get('list')
  findAll(): Category[] {
    return this.appService.findAll('hgg');
  }
}
