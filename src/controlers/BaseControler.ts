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
  Delete,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppResponse } from 'src/models/AppResponse';
import { Employee } from 'src/models/Employee';
import { HeaderState } from 'src/models/enum/HeaderState';
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

  abstract onRequest(headers: any, mode: ModeOperation): Promise<HeaderState>;
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  async onError(record: TClass) {}

  async findAllAsQuery(
    @Res() response: Response,
    @Req() request: Request,
    query?: any,
  ) {
    const records: AppResponse<TClass[]> = await this.service.findAll({
      ...query,
    });

    const generatedResult: AppResponse<TClass[]> = await this.pagingRequest(
      request,
      records,
    );

    if (generatedResult.status == 1) {
      response.status(HttpStatus.OK).json(generatedResult);
    } else {
      response.status(HttpStatus.NOT_FOUND).json(generatedResult);
    }
  }

  @Post()
  async add(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    const state: HeaderState = await this.CheckAccesRight(
      headers,
      response,
      ModeOperation.POST,
    );

    if (state == HeaderState.FALSE) {
      return;
    } else if (state == HeaderState.BYPASS) {
      try {
        const body: Employee = request.body;
        if (body.roles !== Roles.SUPERADMIN) {
          return;
        }
      } catch {
        throw new Error('Something went wrong');
      }
    }
    try {
      this.record = await this.beforeProcessRequest(request);
      // console.log(this.record);
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
  @Get()
  async findAll(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    const state: HeaderState = await this.CheckAccesRight(
      headers,
      response,
      ModeOperation.GET,
    );

    if (state != HeaderState.TRUE) {
      return;
    }
    await this.findAllAsQuery(response, request);
  }

  @Get('/:id')
  async findById(
    @Res() response: Response,
    @Req() request: Request,
    @Param('id') id,
    @Headers() headers,
  ) {
    const state: HeaderState = await this.CheckAccesRight(
      headers,
      response,
      ModeOperation.GET,
    );

    if (state == HeaderState.FALSE) {
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
    const state: HeaderState = await this.CheckAccesRight(
      headers,
      response,
      ModeOperation.PUT,
    );

    if (state != HeaderState.TRUE) {
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

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id, @Headers() headers) {
    const state: HeaderState = await this.CheckAccesRight(
      headers,
      response,
      ModeOperation.DELETE,
    );

    if (state != HeaderState.TRUE) {
      return;
    }

    this.service
      .delete(id)
      .then((e) => {
        response
          .status(HttpStatus.OK)
          .json(new AppResponse(1, 'Record deleted', null));
      })
      .catch((e) => {
        response
          .status(HttpStatus.NOT_MODIFIED)
          .json(new AppResponse(0, null, `Can't able to delete`));
      });
  }
  async pagingRequest(
    request: Request,
    params: AppResponse<TClass[]>,
  ): Promise<AppResponse<TClass[]>> {
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

  public CheckAccesRight = async (
    headers: any,
    response: Response,
    mode: ModeOperation,
  ): Promise<HeaderState> => {
    let state: HeaderState;
    try {
      state = await this.onRequest(headers, mode);
      if (state == HeaderState.FALSE) {
        response
          .status(HttpStatus.UNAUTHORIZED)
          .json(new AppResponse(0, null, 'User not authorized'));
      }
    } catch (e) {
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json(new AppResponse(0, null, e.message));
    }
    return state;
  };
}
