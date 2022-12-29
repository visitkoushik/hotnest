import {
  Body,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
  Headers,
  Inject,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppResponse } from 'src/models/AppResponse';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { EmployeeService } from 'src/services/employee.service';
import { BaseService } from '../services/BaseServices';

export abstract class BaseController<
  TClass,
  TService extends BaseService<TClass>,
> {
  @Inject(EmployeeService)
  public readonly empService: EmployeeService;

  private readonly service: TService;
  private record: TClass;

  constructor(service: TService) {
    this.service = service;
  }

  // abstract validateAuth(authCode: string | null | undefined): Promise<Roles>;
  async onAdd(record: TClass): Promise<TClass> {
    return record;
  }

  async beforeProcessRequest(request: Request): Promise<TClass> {
    const record: TClass = request.body;
    return record;
  }

  abstract onRequest(headers: any, mode: ModeOperation): Promise<boolean>;
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  async onError(record: TClass) {}

  @Post('add')
  async add(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    if (!(await this.CheckAccesRight(headers, response))) {
      return;
    }
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
        .json(new AppResponse<string>(0, null, e.message));
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
    @Headers() headers,
  ) {
    if (!(await this.CheckAccesRight(headers, response))) {
      return;
    }
    await this.findAllAsQuery(response, request);
  }

  @Get('lists/:id')
  async findById(
    @Res() response: Response,
    @Req() request: Request,
    @Param('id') id,
    @Headers() headers,
  ) {
    if (!(await this.CheckAccesRight(headers, response))) {
      return;
    }
    const generatedResult: AppResponse<TClass | string> =
      await this.service.findById(id);
    if (generatedResult.status == 1) {
      response.status(HttpStatus.OK).json(generatedResult);
    } else {
      response.status(HttpStatus.NOT_FOUND).json(generatedResult);
    }
  }

  @Put('/:id')
  async update(
    @Res() response: Response,
    @Req() request: Request,
    @Param('id') id,
    @Headers() headers,
  ) {
    if (!(await this.CheckAccesRight(headers, response))) {
      return;
    }
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

  public getEmpService(): EmployeeService {
    return this.empService;
  }

  private CheckAccesRight = async (headers: any, response: Response) => {
    let right = false;
    try {
      right = await this.onRequest(headers, ModeOperation.POST);
      if (!right) {
        response.status(HttpStatus.UNAUTHORIZED).json('User not authorized');
      }
    } catch (e) {
      response.status(HttpStatus.UNAUTHORIZED).json(e.message);
    }
    return right;
  };
}
