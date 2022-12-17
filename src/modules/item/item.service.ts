import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from 'src/models/Item';
import { BaseService } from 'src/appServices/BaseServices';

@Injectable()
export class ItemService extends BaseService<Item> {
  constructor(
    @InjectModel('Item')
    private readonly itemModel: Model<Item>,
  ) {
    super(itemModel);
  }
}
