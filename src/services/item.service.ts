import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from 'src/models/Item';
import { BaseService } from 'src/services/BaseServices';
import { Category } from 'src/models/Category';

@Injectable()
export class ItemService extends BaseService<Item> {
  constructor(
    @InjectModel(Item.name)
    private readonly itemModel: Model<Item>,
  ) {
    super(itemModel, [
      {
        path: Category.name.toLowerCase(),
        select: 'categoryName',
        options: { strictPopulate: false },
      },
    ]);
  }
  get Model() {
    return this.itemModel;
  }
}
