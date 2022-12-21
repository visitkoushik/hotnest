import { Model, PopulateOptions } from 'mongoose';
import { AppResponse } from 'src/models/AppResponse';

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
      return new AppResponse(0, null, e.toString());
    }
  }

  async findAll(): Promise<AppResponse<TClass[]>> {
    try {
      if (this.populate) {
        const list: TClass[] = await this.model
          .find({})
          .populate(this.populate);
        return new AppResponse(1, list, null);
      } else {
        const list: TClass[] = await this.model.find().exec();
        return new AppResponse(1, list, null);
      }
    } catch (e) {
      return new AppResponse(0, null, e.toString());
    }
  }

  async findById(id: string): Promise<AppResponse<TClass>> {
    try {
      if (this.populate) {
        const record: any = await this.model
          .findById(id)
          .populate(this.populate);
        // const record: TClass = list.length ? list[0] : [];
        if (record != null) {
          return new AppResponse(1, record, null);
        } else {
          return new AppResponse(0, null, 'Record Not Found');
        }
      } else {
        const record: TClass = await this.model.findById(id).exec();
        return new AppResponse(1, record, null);
      }
    } catch (e) {
      return new AppResponse(0, null, e.toString());
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
      return new AppResponse(0, null, ' e.toString()');
    }
  }

  async delete(id: string): Promise<any> {
    try {
      await this.model.findByIdAndRemove(id);
      return new AppResponse(1, 'Element successfuly removed', null);
    } catch {
      return new AppResponse(0, null, 'Something went wrong');
    }
  }
}
