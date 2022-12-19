import {
  Body,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppResponse } from 'src/models/AppResponse';
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

  onAdd(record: TClass): TClass {
    return record;
  }

  beforeProcessRequest(request: Request): TClass {
    const record: TClass = request.body;
    return record;
  }

  @Post('add')
  async addCategory(@Res() response: Response, @Req() request: Request) {
    try {
      const record: TClass = this.beforeProcessRequest(request);
      const modifiedRecord: TClass = this.onAdd(record);
      const generatedResult: AppResponse<TClass | string> =
        await this.service.insert(modifiedRecord);

      if (generatedResult.status == 1) {
        response.status(HttpStatus.CREATED).json(generatedResult);
      } else {
        response.status(HttpStatus.UNPROCESSABLE_ENTITY).json(generatedResult);
      }
    } catch (e) {
      response
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .json(new AppResponse<string>(0, null, 'Error occured'));
    }
  }

  @Get('lists')
  async findAll(@Res() response) {
    const generatedResult: AppResponse<TClass[] | string> =
      await this.service.findAll();
    if (generatedResult.status == 1) {
      response.status(HttpStatus.OK).json(generatedResult);
    } else {
      response.status(HttpStatus.NOT_FOUND).json(generatedResult);
    }
  }

  @Get('lists/:id')
  async findById(@Res() response, @Param('id') id) {
    const generatedResult: AppResponse<TClass | string> =
      await this.service.findById(id);
    if (generatedResult.status == 1) {
      response.status(HttpStatus.OK).json(generatedResult);
    } else {
      response.status(HttpStatus.NOT_FOUND).json(generatedResult);
    }
  }

  @Put('/:id')
  async update(@Res() response, @Req() request: Request, @Param('id') id) {
    const generatedResult: AppResponse<TClass | string> =
      await this.service.update(request.body, id);
    if (generatedResult.status == 1) {
      response.status(HttpStatus.OK).json(generatedResult);
    } else {
      response.status(HttpStatus.NOT_FOUND).json(generatedResult);
    }
  }
}
