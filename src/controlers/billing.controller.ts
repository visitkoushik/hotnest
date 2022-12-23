import { Controller, Get, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { BaseController } from 'src/controlers/BaseControler';
import { Billing } from 'src/models/Billing';
import { BillingService } from '../services/billing.service';

import { Request, Response } from 'express';
import { CustomerService } from '../services/customer.service';
import { Customer } from 'src/models/Customer';
import { AppResponse } from 'src/models/AppResponse';
import { BillingReq } from 'src/models/BillingReq';
import { generate } from 'rxjs';
import { UserType } from 'src/models/enum/UserType';
import { Roles } from 'src/models/enum/Roles';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
@Controller('billing')
export class BillingController extends BaseController<Billing, BillingService> {
  constructor(
    private readonly appService: BillingService,
    private readonly customerService: CustomerService,
  ) {
    super(appService);
  }

  async beforeProcessRequest(request: Request): Promise<Billing> {
    let record: BillingReq = request.body;
    record = this.calculateTotal(record);
    const customer = await this.createingCustomerFromRequest(record);

    const newrecord: BillingReq = { ...record };
    delete newrecord.castomerInfo;

    if (customer) {
      const billing: Billing = newrecord as unknown as Billing;
      billing.customer = customer.id;
      return billing;
    } else {
      throw new Error("Can't add client");
    }
  }

  async createingCustomerFromRequest(record: BillingReq): Promise<Customer> {
    try {
      const C: Customer = record.castomerInfo;

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

  async update(@Res() response, @Req() request: Request, @Param('id') id) {
    response
      .status(HttpStatus.NOT_ACCEPTABLE)
      .json(new AppResponse<string>(0, null, 'Update not Acceptable'));
  }

  async delete(@Res() response, @Req() request: Request, @Param('id') id) {
    response
      .status(HttpStatus.NOT_ACCEPTABLE)
      .json(new AppResponse<string>(0, null, 'Delete not Acceptable'));
  }

  private calculateTotal(record: BillingReq): BillingReq {
    record.Ptotal = 0;
    record.Stotal = 0;
    record.billingItemList.map((b) => {
      record.Ptotal += b.priceAmount * record.itemCount;
      record.Stotal += b.sellingAmount * record.itemCount;
    });

    return JSON.parse(JSON.stringify(record));
  }

  async pagingRequest(
    request: Request,
    params: AppResponse<Billing[] | string>,
  ): Promise<AppResponse<Billing[] | string>> {
    return super.pagingRequest(request, params);
  }

  async findAllAsQuery(response: Response, request: Request) {
    const dt = request.query.date;

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
    super.findAllAsQuery(response, request, filter_stage);
  }
}
