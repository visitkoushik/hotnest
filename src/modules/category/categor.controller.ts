import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './categor.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly appService: CategoryService) {}

  @Get('list')
  findAll(): string {
    return this.appService.findAll();
  }
}
