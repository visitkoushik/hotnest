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
import { BaseService } from '../services/BaseServices';

export abstract class BaseController<
  TClass,
  TService extends BaseService<TClass>,
> {
  private readonly service: TService;
  private record: TClass;
  constructor(service: TService) {
    this.service = service;
  }

  async onAdd(record: TClass): Promise<TClass> {
    return record;
  }

  async beforeProcessRequest(request: Request): Promise<TClass> {
    const record: TClass = request.body;
    return record;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  async onError(record: TClass) {}

  @Post('add')
  async addCategory(@Res() response: Response, @Req() request: Request) {
    try {
      this.record = await this.beforeProcessRequest(request);
      const modifiedRecord: TClass = await this.onAdd(this.record);
      const generatedResult: AppResponse<TClass | string> =
        await this.service.insert(modifiedRecord);

      if (generatedResult.status == 1) {
        response.status(HttpStatus.CREATED).json(generatedResult);
      } else {
        this.onError(this.record);
        response.status(HttpStatus.UNPROCESSABLE_ENTITY).json(generatedResult);
      }
    } catch (e) {
      this.onError(this.record);
      response
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .json(new AppResponse<string>(0, null, 'Error occured'));
    }
  }

  async pagingRequest(
    request: Request,
    params: AppResponse<TClass[] | string>,
  ): Promise<AppResponse<TClass[] | string>> {
    if (params.status === 1 && !(typeof params.responseObject == 'string')) {
      const requestQuery: any = request.query;
      const billing: TClass[] = params.responseObject;
      const pagination: boolean = requestQuery.paged || false;
      const perPageRec: number = +requestQuery.count || 10;
      const page: number = +requestQuery.page || 1;

      if (pagination) {
        const startIndex: number = perPageRec * (page - 1);

        const billRes = billing.slice(startIndex, startIndex + perPageRec);

        return {
          ...params,
          responseObject: billRes,
          totalPage: Math.ceil(billing.length / perPageRec),
          currentPage: page,
        };
      }
    }
    return params;
  }
  @Get('lists')
  async findAll(
    @Res() response: Response,
    @Req() request: Request,
    query?: any,
  ) {
    await this.findAllAsQuery(response, request);
  }

  async findAllAsQuery(
    @Res() response: Response,
    @Req() request: Request,
    query?: any,
  ) {
    const generatedResult: AppResponse<TClass[] | string> =
      await this.pagingRequest(
        request,
        await this.service.findAll({ ...query }),
      );

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
    this.record = await this.beforeProcessRequest(request);
    const generatedResult: AppResponse<TClass | string> =
      await this.service.update(this.record, id);
    if (generatedResult.status == 1) {
      response.status(HttpStatus.OK).json(generatedResult);
    } else {
      this.onError(this.record);
      response.status(HttpStatus.NOT_FOUND).json(generatedResult);
    }
  }
}
