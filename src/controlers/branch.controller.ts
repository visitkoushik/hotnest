import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  Req,
  Res,
  Headers,
} from '@nestjs/common';
import { Request, response, Response } from 'express';
import { async } from 'rxjs';
import { BaseController } from 'src/controlers/BaseControler';
import { AppResponse } from 'src/models/AppResponse';
import { Branch } from 'src/models/Branch';
import { HeaderState } from 'src/models/enum/HeaderState';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { AccessService } from 'src/services/access.service';
import { BranchService } from 'src/services/branch.service';

@Controller('chain')
export class BranchController extends BaseController<Branch, BranchService> {
  async onRequest(headers: any, mode: ModeOperation): Promise<HeaderState> {
    const authCode = headers['auth-code'];
    const r: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[r.toString().toUpperCase()];

    return listOfPrev.findIndex(
      (e: string) => e == 'CHAIN_' + mode.toString().toUpperCase(),
    ) > -1
      ? HeaderState.TRUE
      : HeaderState.FALSE;
  }
  async onAdd(record: Branch) {
    if (record.available == undefined || record.available == null) {
      record.available = true;
    }
    record.available = true;
    return record;
  }
  constructor(
    private readonly moduleService: BranchService,
    private readonly accessService: AccessService,
  ) {
    super(moduleService);
  }

  async findAllAsQuery(response: Response, request: Request) {
    const available: boolean | null =
      request.query.available === 'true'
        ? true
        : request.query.available === 'false'
        ? false
        : null;

    let filter_stage = {};
    if (available != null) {
      filter_stage = {
        available: {
          $eq: available,
        },
      };
    }

    super.findAllAsQuery(response, request, filter_stage);
  }

  @Get('/code')
  async getCode(@Res() response: Response, @Headers() headers) {
    const state: HeaderState = await this.CheckAccesRight(
      headers,
      response,
      ModeOperation.GET,
    );

    if (state == HeaderState.FALSE) {
      return;
    }
    const generatedResult: AppResponse<Branch[]> =
      await this.moduleService.findAll();

    if (generatedResult.status == 1) {
      const brnccd = 'HOT-' + (generatedResult.responseObject.length + 1);
      response
        .status(HttpStatus.OK)
        .json(
          new AppResponse<string>(
            generatedResult.status,
            brnccd,
            generatedResult.error,
          ),
        );
    } else {
      response.status(HttpStatus.NOT_FOUND).json(generatedResult);
    }
  }
}
