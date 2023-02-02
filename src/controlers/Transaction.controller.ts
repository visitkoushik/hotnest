import { Controller, HttpStatus } from '@nestjs/common';
import { HeaderState } from 'src/models/enum/HeaderState';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { Transaction } from 'src/models/Transaction';
import { AccessService } from 'src/services/access.service';
import { TransactionService } from 'src/services/Transaction.service';
import { BaseController } from './BaseControler';
import { query, Request, Response } from 'express';
import { AppResponse } from 'src/models/AppResponse';
@Controller('transaction')
export class TransactionController extends BaseController<
  Transaction,
  TransactionService
> {
  async onRequest(headers: any, mode: ModeOperation): Promise<HeaderState> {
    const authCode = headers['auth-code'];
    const r: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[r.toString().toUpperCase()];

    return listOfPrev.findIndex(
      (e: string) =>
        e ==
        Transaction.name.toUpperCase() + '_' + mode.toString().toUpperCase(),
    ) > -1
      ? HeaderState.TRUE
      : HeaderState.FALSE;
  }

  constructor(
    private readonly moduleService: TransactionService,
    private readonly accessService: AccessService,
  ) {
    super(moduleService);
  }

  async findAllAsQuery(response: Response, request: Request) {
    let filter_stage = {};
    const dt = request.query?.date;
    if (dt) {
      const x = new Date(dt.toString());
      const vs = new Date(x.getFullYear(), x.getMonth(), x.getDate(), 0, 0, 0);
      const ve = new Date(
        x.getFullYear(),
        x.getMonth(),
        x.getDate(),
        23,
        59,
        69,
      );
      const startDt = vs.toISOString();
      const endDt = ve.toISOString();
      filter_stage = {
        ...filter_stage,
        transactionDate: {
          $gte: startDt, //'2022-12-22T00:00',
          $lte: endDt, //'2022-12-22T23:59',
        },
      };
    }
    if (this.branchCode !== '0') {
      filter_stage = {
        ...filter_stage,
        branchCode: {
          $eq: this.branchCode,
        },
      };
    }

    const records: AppResponse<Transaction[]> =
      await this.moduleService.findAll({
        ...filter_stage,
      });

    const generatedResult: AppResponse<Transaction[]> =
      await this.pagingRequest(request, records);

    if (generatedResult.status == 1) {
      const totals = this.moduleService.getTotal([...records.responseObject]);

      const responseObject = {
        list: [...generatedResult.responseObject],
        totalCr: totals.totalCr,
        totalDr: totals.totalDr,
      };

      response
        .status(HttpStatus.OK)
        .json({ ...generatedResult, responseObject });
    } else {
      response.status(HttpStatus.NOT_FOUND).json(generatedResult);
    }
  }
}
