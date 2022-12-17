import { Module } from '@nestjs/common';
import { CategoryController } from './categor.controller';
import { CategoryService } from './categor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryImpl } from 'src/models/Category';

@Module({
  imports: [MongooseModule.forFeature([CategoryImpl])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
