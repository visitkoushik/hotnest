import {
  Controller,
  HttpStatus,
  Param,
  Req,
  Res,
  Headers,
  Put,
  Delete,
  Get,
} from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Billing } from 'src/models/Billing';
import { BillingService } from '../services/billing.service';

import { Request, Response } from 'express';
import { CustomerService } from '../services/customer.service';
import { Customer } from 'src/models/Customer';
import { AppResponse } from 'src/models/AppResponse';
import { BillingReq } from 'src/models/BillingReq';
import { UserType } from 'src/models/enum/UserType';
import { Roles } from 'src/models/enum/Roles';
import { ModeOperation } from 'src/models/enum/Mode';
import { HeaderState } from 'src/models/enum/HeaderState';
import { Category } from 'src/models/Category';
import { AccessService } from 'src/services/access.service';
import { Employee } from 'src/models/Employee';
import { LoginRegisterService } from 'src/services/login-register.service';
import { Login } from 'src/models/Login';

@Controller('billing')
export class BillingController extends BaseController<Billing, BillingService> {
  async onRequest(headers: any, mode: ModeOperation): Promise<HeaderState> {
    const authCode = headers['auth-code'];
    const role: Roles = await this.empService.validateAuth(authCode);
    const listOfPrev: string[] =
      this.accessService.accessList[role.toString().toUpperCase()];

    return listOfPrev.findIndex(
      (e: string) =>
        e == Billing.name.toUpperCase() + '_' + mode.toString().toUpperCase(),
    ) > -1
      ? HeaderState.TRUE
      : HeaderState.FALSE;
  }
  constructor(
    private readonly appService: BillingService,
    private readonly customerService: CustomerService,
    private readonly accessService: AccessService,
  ) {
    super(appService);
  }

  async beforeProcessRequest(request: Request): Promise<Billing> {
    let record: BillingReq = request.body;
    record = this.calculateTotal(record);

    record.billNumber = await this.getBillingNumber();

    const customer = await this.createingCustomerFromRequest(record);

    const newrecord: BillingReq = { ...record };

    if (customer) {
      const billing: Billing = newrecord as unknown as Billing;
      billing.customer = customer.id;
      return billing;
    } else {
      throw new Error("Can't add client");
    }
  }
  getBillingNumber = async (): Promise<string> => {
    const dt: string = new Date().toISOString().split('T')[0];

    const filter_stage = {
      billingDate: {
        $gte: dt + 'T00:00', //'2022-12-22T00:00',
        $lte: dt + 'T23:59', //'2022-12-22T23:59',
      },
    };
    const allExistBill = await this.appService.findAll(
      filter_stage,
      false,
      'billNumber',
    );

    const allBillNumber: number[] = allExistBill?.responseObject.map(
      (b: Billing) => +b.billNumber,
    );
    if (Array.isArray(allBillNumber) && allBillNumber.length > 0) {
      return Math.max.apply(null, [...allBillNumber]) + 1 + '';
    }
    return '1';
  };
  async createingCustomerFromRequest(record: BillingReq): Promise<Customer> {
    try {
      const C: Customer = record.customer;

      C.userType = UserType.CLIENT;
      C.roles = Roles.CLIENT;

      const appC: AppResponse<Customer> = await this.customerService.insert(C);

      let newC: Customer = null;
      if (appC.status == 1) {
        newC = appC.responseObject;
      }

      return newC;
    } catch (e) {
      throw new Error("Can't create User");
    }
  }

  async onError(record: Billing) {
    await this.customerService.delete(record.customer + '');
  }

  @Put('/:id')
  async update(@Res() response, @Req() request: Request, @Param('id') id) {
    response
      .status(HttpStatus.NOT_ACCEPTABLE)
      .json(new AppResponse<string>(0, null, 'Update not Acceptable'));
  }
  // @Delete('/:id')
  // async delete(@Res() response, @Param('id') id, @Headers() headers) {
  //   console.log('UNACCEPTABLE');
  //   response
  //     .status(HttpStatus.NOT_ACCEPTABLE)
  //     .json(new AppResponse<string>(0, null, 'Delete not Acceptable'));
  // }

  private calculateTotal(record: BillingReq): BillingReq {
    record.Ptotal = 0;
    record.Stotal = 0;
    record.billingItemList.map((b) => {
      record.Ptotal += b.priceAmount * b.itemCount;
      record.Stotal +=
        (b.sellingAmount -
          (b.discount > 0
            ? b.isDiscountInPercentage
              ? (b.sellingAmount * b.discount) / 100
              : b.discount
            : 0)) *
        b.itemCount;
    });

    return JSON.parse(JSON.stringify(record));
  }

  async pagingRequest(
    request: Request,
    params: AppResponse<Billing[]>,
  ): Promise<AppResponse<Billing[]>> {
    return super.pagingRequest(request, params);
  }

  async findAllAsQuery(response: Response, request: Request) {
    const dt = request.query?.date;

    let startDt = request.query?.startDt;
    let endDt = request.query?.endDt;
    let filter_stage = {};

    if ((startDt && endDt) || dt) {
      if (dt) {
        startDt = dt.toString().split('T')[0] + 'T00:00';
        endDt = dt.toString().split('T')[0] + 'T23:59';
      }
      filter_stage = {
        billingDate: {
          $gte: startDt, //'2022-12-22T00:00',
          $lte: endDt, //'2022-12-22T23:59',
        },
      };
    }
    const records: AppResponse<Billing[]> = await this.appService.findAll({
      ...filter_stage,
    });

    const authCode: string = request.headers['auth-code'].toString();
    const r: Roles = await this.empService.validateAuth(authCode);

    const generatedResult: AppResponse<Billing[]> = await this.pagingRequest(
      request,
      records,
    );

    let profit = null;
    if (r == Roles.SUPERADMIN || r == Roles.ADMIN) {
      profit = 0;
      records.responseObject.forEach((b: Billing) => {
        profit += b.Stotal - b.Ptotal - b.discount;
      });
    }
    if (generatedResult.status == 1) {
      response.status(HttpStatus.OK).json({
        ...generatedResult,
        responseObject: { list: generatedResult.responseObject, profit },
      });
    } else {
      response.status(HttpStatus.NOT_FOUND).json(generatedResult);
    }
  }

  @Put('paydue/:id')
  async updateDue(
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
    const record: Billing = (await this.appService.findById(id)).responseObject;
    if (record) {
      const paidObj = request.body as unknown as { paid: number };
      const paidAmount: number = +paidObj.paid;
      if (record.Stotal >= record.paid + paidAmount) {
        record.paid = record.paid + paidAmount;

        const grsp: AppResponse<Billing | string> =
          await this.appService.update({ ...record }, id);
        response
          .status(HttpStatus.OK)
          .json({ ...grsp, responseObject: 'Payment updated' });
      } else {
        response
          .status(HttpStatus.NOT_ACCEPTABLE)
          .json(
            new AppResponse(
              0,
              null,
              `Ammount can not be greater than the due ${
                record.Stotal - record.paid
              }`,
            ),
          );
      }
    } else {
      response
        .status(HttpStatus.NOT_FOUND)
        .json(new AppResponse(0, null, 'Bill is not exist'));
    }
  }
}
