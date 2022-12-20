import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from 'src/models/Item';
import { BaseService } from 'src/appServices/BaseServices';
import { Category } from 'src/models/Category';

@Injectable()
export class ItemService extends BaseService<Item> {
  // beforeInsert(record: Item): Item {
  //   const record: Item = null;
  //   const recordItemPrice: ItemPrice = request.body as unknown as ItemPrice;

  //   console.log(recordItemPrice);
  //   return record;
  // }

  constructor(
    @InjectModel(Item.name)
    private readonly itemModel: Model<Item>,
  ) {
    super(itemModel, [
      {
        path: Category.name.toLowerCase(),
        model: Category.name,
        options: { strictPopulate: false },
      },
    ]);
  }
}
