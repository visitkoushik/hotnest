import {
  Controller,
  Get,
  Headers,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response, Request } from 'express';
import { Model } from 'mongoose';
import { AppResponse } from 'src/models/AppResponse';
import { Billing } from 'src/models/Billing';
import { BillingItem } from 'src/models/BillingItem';
import { BillingReport } from 'src/models/BillingReport';
import { BillingReq } from 'src/models/BillingReq';
import { Customer, CustomerDocument } from 'src/models/Customer';
import { HeaderState } from 'src/models/enum/HeaderState';
import { ModeOperation } from 'src/models/enum/Mode';
import { Roles } from 'src/models/enum/Roles';
import { ReportFilter } from 'src/models/ReportFIlter';
import { ItemReport, ItemWiseReport, ReportResp } from 'src/models/ReportResp';
import { AccessService } from 'src/services/access.service';
import { BillingService } from 'src/services/billing.service';
import { CategoryService } from 'src/services/categor.service';
import { CustomerService } from 'src/services/customer.service';
import { EmployeeService } from 'src/services/employee.service';
import { ItemService } from 'src/services/item.service';
import { LoginRegisterService } from 'src/services/login-register.service';
import { ReportService } from 'src/services/report.service';
import { BaseController } from './BaseControler';

@Controller('reports')
export class ReportsController {
  constructor(
    private readonly accessService: AccessService,
    private readonly reportService: ReportService,
    private readonly empService: EmployeeService,
  ) {}

  async onRequest(headers: any): Promise<HeaderState> {
    const authCode = headers['auth-code'];
    const roles: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[roles.toString().toUpperCase()];

    return listOfPrev.findIndex((e: string) => e == 'REPORT_READ') > -1
      ? HeaderState.TRUE
      : HeaderState.FALSE;
  }

  pagingRequest(
    request: Request,
    params: BillingReport[] | ItemWiseReport[],
  ): {
    billList: BillingReport[] | ItemWiseReport[];
    totalPage: number;
    currentPage: number;
  } {
    if (params.length > 0) {
      const requestQuery: ReportFilter = request.body;
      const billing: BillingReport[] | ItemWiseReport[] = params;
      const pagination: boolean = requestQuery.paged || false;
      const perPageRec: number = +requestQuery.count || 10;
      const page: number = +requestQuery.page || 1;

      if (pagination) {
        const startIndex: number = perPageRec * (page - 1);

        const billRes = billing.slice(startIndex, startIndex + perPageRec);

        return {
          billList: billRes,
          totalPage: Math.ceil(billing.length),
          currentPage: page,
        };
      }
    }
    return { billList: params, totalPage: 0, currentPage: 0 };
  }

  public CheckAccesRight = async (
    headers: any,
    response: Response,
  ): Promise<HeaderState> => {
    let state: HeaderState;
    try {
      state = await this.onRequest(headers);
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

  @Post('billwise')
  async getReportBillWise(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    try {
      const state: HeaderState = await this.CheckAccesRight(headers, response);
      if (state == HeaderState.TRUE) {
        this.reportService
          .findAllQueryReport(request)
          .then((billReport: ReportResp) => {
            const generatedResult: any = this.pagingRequest(
              request,
              billReport.billingReport,
            );
            response.status(HttpStatus.OK).json(
              new AppResponse(
                1,
                {
                  ...generatedResult,
                  items: billReport.items,
                  profit: billReport.profit,
                  totalSell: billReport.totalSell,
                  totalCost: billReport.totalCost,
                  unPaid: billReport.unPaid,
                  tax: billReport.tax,
                },
                null,
              ),
            );
          })
          .catch((e) => {
            response
              .status(HttpStatus.NOT_ACCEPTABLE)
              .json(new AppResponse(0, null, 'Something went Wrong'));
          });
      } else {
        response
          .status(HttpStatus.UNAUTHORIZED)
          .json(new AppResponse(0, null, 'No Access to Report module'));
      }
    } catch (e) {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(new AppResponse(0, null, e.message));
    }
  }

  @Post('itemwise')
  async getReportItemWise(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    try {
      const state: HeaderState = await this.CheckAccesRight(headers, response);
      if (state == HeaderState.TRUE) {
        this.reportService
          .findItemQueryReport(request)
          .then((billingReport: ItemWiseReport[]) => {
            const generatedResult: any = this.pagingRequest(
              request,
              billingReport,
            );
            response.status(HttpStatus.OK).json(
              new AppResponse(
                1,
                {
                  ...generatedResult,
                },
                null,
              ),
            );
          })
          .catch((e) => {
            response
              .status(HttpStatus.NOT_ACCEPTABLE)
              .json(new AppResponse(0, null, 'Something went Wrong'));
          });
      } else {
        response
          .status(HttpStatus.UNAUTHORIZED)
          .json(new AppResponse(0, null, 'No Access to Report module'));
      }
    } catch (e) {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(new AppResponse(0, null, e.message));
    }
  }

  @Post('overall')
  async getOverAllReport(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    try {
      const state: HeaderState = await this.CheckAccesRight(headers, response);
      if (state == HeaderState.TRUE) {
        this.reportService
          .findOverAllReport(request)
          .then((e) => {
            response
              .status(HttpStatus.OK)
              .json(new AppResponse(1, [...e], null));
          })
          .catch((e) => {
            response
              .status(HttpStatus.NOT_ACCEPTABLE)
              .json(new AppResponse(0, null, 'Something went Wrong'));
          });
      } else {
        response
          .status(HttpStatus.UNAUTHORIZED)
          .json(new AppResponse(0, null, 'No Access to Report module'));
      }
    } catch (e) {
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(new AppResponse(0, null, e.message));
    }
  }
}
