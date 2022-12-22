import { Injectable } from '@nestjs/common';

import { Category } from 'src/models/Category';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/services/BaseServices';

@Injectable()
export class CategoryService extends BaseService<Category> {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
  ) {
    super(categoryModel);
  }
}
