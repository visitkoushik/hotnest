import { Module } from '@nestjs/common';
import { CategoryController } from '../controlers/categor.controller';
import { CategoryService } from '../services/categor.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryImpl } from 'src/models/Category';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [MongooseModule.forFeature([CategoryImpl]), EmployeeModule],
  controllers: [CategoryController],
  exports: [CategoryService],
  providers: [CategoryService],
})
export class CategoryModule {}
