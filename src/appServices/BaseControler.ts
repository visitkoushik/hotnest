import { Body, Post } from '@nestjs/common';
import { BaseService } from './BaseServices';

export abstract class BaseController<
  TClass,
  TService extends BaseService<TClass>,
> {
  private readonly service: TService;
  private readonly record: TClass;
  constructor(service: TService) {
    this.service = service;
  }

  abstract onAdd(record: TClass): any;

  @Post('add')
  addCategory(@Body() record: TClass): any {
    const modifiedRecord: TClass = this.onAdd(record);
    const generatedResult = this.service.insert(modifiedRecord);
    return generatedResult;
  }
}
