import * as mongoose from 'mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { Type } from '@nestjs/common';

export class BaseSchema extends mongoose.Schema {
  constructor(sche: any) {
    super(sche);
    this.set('toJSON', {
      virtuals: true,
      transform: (doc, converted) => {
        delete converted._id;
        delete converted.__v;
      },
    });
  }

  public static createForClass<TClass = any, _TDeprecatedTypeArgument = any>(
    target: Type<TClass>,
  ): mongoose.Schema<TClass> {
    const schema: mongoose.Schema<TClass> =
      SchemaFactory.createForClass(target);
    schema.set('toJSON', {
      virtuals: true,
      transform: (doc, converted) => {
        delete converted._id;
        delete converted.__v;
      },
    });
    return schema;
  }
}
