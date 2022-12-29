import { Module } from '@nestjs/common';
import { CategoryController } from '../controlers/category.controller';
import { CategoryService } from '../services/categor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryImpl } from 'src/models/Category';
import { EmployeeModule } from './employee.module';
import { AccessService } from 'src/services/access.service';

@Module({
  imports: [MongooseModule.forFeature([CategoryImpl]), EmployeeModule],
  controllers: [CategoryController],
  exports: [CategoryService],
  providers: [CategoryService, AccessService],
})
export class CategoryModule {}
