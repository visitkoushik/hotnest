import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AppResponse } from 'src/models/AppResponse';
import { Item } from 'src/models/Item';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel('Item')
    private readonly model: Model<Item>,
  ) {}
  // findAll<Category>(authKey: string): Category[] {
  //   const list: Category[] = [] as Category[];
  //   return list;
  // }

  async insert(record: Item): Promise<AppResponse<Item>> {
    const newObj = new this.model(record);
    const savedObject = await newObj.save();
    if (savedObject) {
      console.log(savedObject.toJSON());
      return new AppResponse(1, savedObject, null);
    }
    return new AppResponse(0, null, 'Error occured during Save');
  }
}
