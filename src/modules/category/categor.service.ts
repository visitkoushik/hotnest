import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/appServices/baseService';

import { Category } from 'src/models/Category';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<Category>,
  ) {}
  // findAll<Category>(authKey: string): Category[] {
  //   const list: Category[] = [] as Category[];
  //   return list;
  // }

  async insert(category: Category): Promise<string | Category> {
    const newObj = new this.categoryModel(category);
    const savedObject = await newObj.save();
    return savedObject;
  }
}
