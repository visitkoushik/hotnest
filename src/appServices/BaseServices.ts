import { Injectable } from '@nestjs/common';

import { Category } from 'src/models/Category';
import { Model, Schema } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AppResponse } from 'src/models/AppResponse';

@Injectable()
export class BaseService<TClass> {
  private model: Model<TClass>;
  constructor(model: Model<TClass>) {
    this.model = model;
  }
  // findAll<Category>(authKey: string): Category[] {
  //   const list: Category[] = [] as Category[];
  //   return list;
  // }

  async insert(record: TClass): Promise<AppResponse<TClass>> {
    const newObj = new this.model(record);
    const savedObject: any = await newObj.save();
    if (savedObject) {
      console.log(savedObject.toJSON());
      return new AppResponse(1, savedObject, null);
    }
    return new AppResponse(0, null, 'Error occured during Save');
  }
}
