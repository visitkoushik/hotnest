import { Module } from '@nestjs/common';
import { CategoryController } from './categor.controller';
import { CategoryService } from './categor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryImp } from 'src/models/Category';

@Module({
  imports: [MongooseModule.forFeature([CategoryImp])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
