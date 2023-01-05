import { Model, PopulateOptions } from 'mongoose';
import { AppResponse } from 'src/models/AppResponse';
import { BaseEntity } from 'src/models/BaseEntity';

export abstract class BaseService<TClass> {
  private model: Model<TClass>;
  private populate?: PopulateOptions[];
  constructor(model: Model<TClass>, populate?: PopulateOptions[]) {
    this.model = model;
    this.populate = populate;
  }
  public beforeInsert(record: TClass): TClass {
    return record;
  }

  public afterInsert(record: TClass): TClass {
    return record;
  }
  async insert(record: TClass): Promise<AppResponse<TClass>> {
    const modifiedObject: any = this.beforeInsert(record);
    const newObj = new this.model(modifiedObject);
    try {
      const savedObject: any = await newObj.save();
      if (savedObject) {
        const finalObject: any = this.afterInsert(savedObject);
        return new AppResponse(1, finalObject.toJSON(), null);
      }
      return new AppResponse(0, null, 'Error occured during Save');
    } catch (e) {
      return new AppResponse(0, null, e.message);
    }
  }

  async findAll(
    query?: any,
    isPopulate?: boolean,
    select?: any,
    populateQuery?: any,
  ): Promise<AppResponse<TClass[]>> {
    try {
      const queryObject = this.model.find(query || {});
      let list: TClass[];
      if (
        (this.populate || populateQuery) &&
        (isPopulate == null || isPopulate == undefined || isPopulate == true)
      ) {
        list = await queryObject.populate(populateQuery || this.populate);
      } else {
        list = await queryObject.exec();
      }
      return new AppResponse(1, list, null);
    } catch (e) {
      console.log('catchs', e);
      return new AppResponse(0, null, e.toString());
    }
  }

  async findById(
    id: string,
    isPopulate?: boolean,
    select?: any,
    populateQuery?: any,
  ): Promise<AppResponse<TClass>> {
    try {
      const queryObject = this.model.findById(id).select(select);
      let record: any;
      if (
        (this.populate || populateQuery) &&
        (isPopulate == null || isPopulate == undefined || isPopulate == true)
      ) {
        record = await queryObject.populate(populateQuery || this.populate);
      } else {
        record = await queryObject.exec();
      }
      if (record != null) {
        return new AppResponse(1, record, null);
      } else {
        return new AppResponse(0, null, 'Record Not Found');
      }
    } catch (e) {
      return new AppResponse(0, null, e.message);
    }
  }

  async update(
    record: TClass,
    id: string,
  ): Promise<AppResponse<string | TClass>> {
    try {
      const modifiedObject: any = this.beforeInsert(record);
      const savedObj: any = await this.model.findByIdAndUpdate(
        id,
        modifiedObject,
        {
          new: true,
        },
      );

      if (savedObj != null) {
        return new AppResponse(1, savedObj, null);
      } else {
        return new AppResponse(0, null, 'Record Not Found');
      }
    } catch (e) {
      return new AppResponse(0, null, e.message);
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const deletedrecord = await this.model.findByIdAndRemove(id);
      if (!deletedrecord) {
        return new AppResponse(0, null, 'Record not found');
      } else {
        return new AppResponse(1, 'Element successfuly removed', null);
      }
    } catch {
      return new AppResponse(0, null, 'Something went wrong');
    }
  }
}
