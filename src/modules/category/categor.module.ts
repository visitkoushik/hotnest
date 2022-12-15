import { Module } from '@nestjs/common';
import { CategoryController } from './categor.controller';
import { CategoryService } from './categor.service';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
