import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model } from 'mongoose';
import { async } from 'rxjs';
import { AppResponse } from 'src/models/AppResponse';
import { Billing } from 'src/models/Billing';
import { BillingItem } from 'src/models/BillingItem';
import { BillingReport } from 'src/models/BillingReport';
import { BillingReq } from 'src/models/BillingReq';
import { Customer, CustomerDocument } from 'src/models/Customer';
import { ReportFilter } from 'src/models/ReportFIlter';
import { ItemReport, ItemWiseReport, ReportResp } from 'src/models/ReportResp';
import { AccessService } from './access.service';
import { BillingService } from './billing.service';
import { CategoryService } from './categor.service';
import { CustomerService } from './customer.service';
import { EmployeeService } from './employee.service';
import { ItemService } from './item.service';
import { LoginRegisterService } from './login-register.service';
enum FILTER_BY {
  DATE = 1,
  MONTH,
  YEAR,
}
@Injectable()
export class ReportService {
  private customerModel: Model<Customer>;
  constructor(
    private customerService: CustomerService,
    private readonly billService: BillingService,
    private readonly loginService: LoginRegisterService,
    private readonly categoryService: CategoryService,
    private readonly iteemService: ItemService,
    private readonly accessService: AccessService,
  ) {
    this.customerModel = this.customerService.serviceModel;
  }

  findAllQueryReport = async (request: Request): Promise<ReportResp> => {
    return new Promise(async (res, rej) => {
      try {
        let profit = 0;
        let totalSell = 0;
        let totalCost = 0;
        let unPaid = 0;
        let tax = 0;

        const reportFilter: ReportFilter = request.body;
        const dateRange: { start: string; end: string } = this.getDate(
          reportFilter.startDate,
          reportFilter.endDate,
          reportFilter.filterDateBy,
        );
        const branchCode = reportFilter.branchCode || '0';
        let filter_stage = {};
        if (branchCode !== '0') {
          filter_stage = {
            ...filter_stage,
            branchCode: {
              $eq: branchCode,
            },
          };
        }
        const allBills = await this.findByDateRange(
          dateRange.start,
          dateRange.end,
          filter_stage,
        ).catch((e) => {
          rej(e);
        });

        const billReport: BillingReport[] = this.filterAllBills(
          allBills || [],
          reportFilter,
        );
        billReport.forEach((b: BillingReport) => {
          profit +=
            b.Stotal -
            b.Ptotal -
            b.discount -
            (b.Stotal - b.paid) -
            (b.tax || 0);
          unPaid += b.Stotal - b.paid;
          totalSell += b.Stotal;
          totalCost += b.Ptotal;
          tax += b.tax || 0;
        });

        const resp: ReportResp = {} as ReportResp;
        resp.billingReport = billReport;
        resp.items = this.getItemWiseCountBill(allBills || []);
        resp.totalSell = totalSell;
        resp.totalCost = totalCost;
        resp.unPaid = unPaid;
        resp.profit = profit;
        resp.tax = tax;
        res(resp);
      } catch (e) {
        rej(e.message);
      }
    });
  };

  findItemQueryReport = async (request: Request): Promise<ItemWiseReport[]> => {
    return new Promise(async (res, rej) => {
      try {
        const reportFilter: ReportFilter = request.body;
        if (
          reportFilter.selectedReport &&
          reportFilter.selectedReport === '-1'
        ) {
          rej('Report not supplied');
          return;
        }
        const dateRange: { start: string; end: string } = this.getDate(
          reportFilter.startDate,
          reportFilter.endDate,
          reportFilter.filterDateBy,
        );
        const branchCode = reportFilter.branchCode || '0';
        let filter_stage = {};
        if (branchCode !== '0') {
          filter_stage = {
            ...filter_stage,
            branchCode: {
              $eq: branchCode,
            },
          };
        }
        const allBills = await this.findByDateRange(
          dateRange.start,
          dateRange.end,
          filter_stage,
        ).catch((e) => {
          rej(e);
        });

        const selectedBills: Billing[] = (allBills || []).filter(
          (ab: Billing) =>
            ab.billingItemList.findIndex(
              (bit: BillingItem) => bit.itemID == reportFilter.selectedReport,
            ) > -1,
        );
        const itmReportList: ItemWiseReport[] = selectedBills.map(
          (billing: Billing) => {
            const iteReport: ItemWiseReport = {} as ItemWiseReport;
            const billingItem: BillingItem = billing.billingItemList.find(
              (b: BillingItem) => b.itemID == reportFilter.selectedReport,
            );
            if (billingItem) {
              iteReport.date = billingItem.date.toString();
              iteReport.discount = billingItem.discount;
              iteReport.itemCount = billingItem.itemCount;
              iteReport.itemID = billingItem.itemID;
              iteReport.itemName = billingItem.itemName;
              iteReport.priceAmount =
                billingItem.priceAmount * billingItem.itemCount;
              iteReport.sellingAmount =
                billingItem.sellingAmount * billingItem.itemCount;
              iteReport.total =
                (billingItem.sellingAmount -
                  billingItem.priceAmount -
                  (billingItem.isDiscountInPercentage
                    ? billingItem.sellingAmount *
                      (1 - billingItem.discount / 100)
                    : billingItem.discount)) *
                billingItem.itemCount;
            }
            return { ...iteReport };
          },
        );
        res(this.filterItemReports(itmReportList, reportFilter));
      } catch (e) {
        rej(e.message);
      }
    });
  };

  findByDateRange = async (
    startDt,
    endDt,
    filter_stage: any,
  ): Promise<Billing[]> => {
    const startTime = 'T00:00';
    const endTime = 'T23:59';

    if (startDt && endDt) {
      filter_stage = {
        ...filter_stage,
        billingDate: {
          $gte: startDt + startTime, //'2022-12-22T00:00',
          $lte: endDt + endTime, //'2022-12-22T23:59',
        },
      };
    }

    return this.billService.serviceModel
      .find({
        ...filter_stage,
      })
      .populate(
        Customer.name.toLowerCase(),
        'firstName lastName middleName gender mobileNumbers -_id',
        this.customerModel,
      );
  };

  transform(value: string, ...args: any[]): Date | undefined {
    if (!value) {
      return undefined;
    }
    if (args && args[0]) {
      if (args[0] === 'Y') {
        if (args[1] === 'e') {
          return new Date(+value, 11, 31);
        }
        return new Date(+value, 0, 1);
      } else if (args[0] === 'M') {
        const year = +value.split('/')[1];
        let febDateofLeapyear = 28;
        if (year % 4 === 0 && year % 400 !== 0) {
          febDateofLeapyear = 29;
        }
        const datescope = [
          31,
          febDateofLeapyear,
          31,
          30,
          31,
          30,
          31,
          31,
          30,
          31,
          30,
          31,
        ];
        const MMM = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];

        const monthindex = MMM.indexOf(value.split('/')[0]);
        if (args[1] === 'e') {
          return new Date(year, monthindex, datescope[monthindex]);
        }
        return new Date(year, monthindex, 1);
      }
    }

    const v = new Date(value);
    return new Date(v.getFullYear(), v.getMonth(), v.getDate());
  }

  getDate = (
    startDate,
    endDate,
    filterDateBy,
  ): { start: string; end: string } => {
    let start: Date;
    let end: Date;
    switch (filterDateBy) {
      case FILTER_BY.DATE:
        start = new Date(startDate);
        end = new Date(endDate);
        break;
      case FILTER_BY.MONTH:
        start = this.transform(startDate, 'M') as Date;
        end = this.transform(endDate, 'M', 'e') as Date;
        break;
      case FILTER_BY.YEAR:
        start = this.transform(startDate, 'Y') as Date;
        end = this.transform(endDate, 'Y', 'e') as Date;
        break;
    }
    const strStart: string =
      start.getFullYear() +
      '-' +
      (+start.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      start.getDate().toString().padStart(2, '0');

    const strEnd: string =
      end.getFullYear() +
      '-' +
      (+end.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      end.getDate().toString().padStart(2, '0');
    return { start: strStart, end: strEnd };
  };
  filterItemReports = (
    allItems: ItemWiseReport[],
    reportFilter: ReportFilter,
  ): ItemWiseReport[] => {
    const selectedReport = reportFilter.selectedReport;

    const filterDateBy = reportFilter.filterDateBy;

    const MMM = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const itemWithDateHeader: {
      [key: string]: ItemWiseReport[];
    } = {} as {
      [key: string]: ItemWiseReport[];
    };
    for (const items of allItems) {
      const billDate = new Date(items.date);
      if (filterDateBy === FILTER_BY.DATE) {
        const arry =
          itemWithDateHeader[
            MMM[billDate.getMonth()] +
              billDate.getDate() +
              ', ' +
              billDate.getFullYear()
          ] || [];
        arry.push(items);
        itemWithDateHeader[
          MMM[billDate.getMonth()] +
            billDate.getDate() +
            ', ' +
            billDate.getFullYear()
        ] = [...arry];
      } else if (filterDateBy === FILTER_BY.MONTH) {
        const arry =
          itemWithDateHeader[
            MMM[billDate.getMonth()] + ', ' + billDate.getFullYear()
          ] || [];
        arry.push(items);
        itemWithDateHeader[
          MMM[billDate.getMonth()] + ', ' + billDate.getFullYear()
        ] = [...arry];
      } else if (filterDateBy === FILTER_BY.YEAR) {
        const arry = itemWithDateHeader[billDate.getFullYear()] || [];
        arry.push(items);
        itemWithDateHeader[billDate.getFullYear()] = [...arry];
      }
    }

    const headers: string[] = Object.keys(itemWithDateHeader);
    const finalItemWiseReport: ItemWiseReport[] = [];

    for (const header of headers) {
      const listOfItemWiseReport: ItemWiseReport[] = itemWithDateHeader[header];
      finalItemWiseReport.push(
        this.createSingleItemWiseReport(listOfItemWiseReport, header),
      );
    }

    return [...finalItemWiseReport];
  };

  filterAllBills = (
    allBills: Billing[],
    reportFilter: ReportFilter,
  ): BillingReport[] => {
    const selectedReport = '-1';
    const startDate = reportFilter.startDate;
    const endDate = reportFilter.endDate;
    const filterDateBy = reportFilter.filterDateBy;

    const bills: BillingReq[] = [];
    const MMM = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const billWithDateHeader: {
      [key: string]: Billing[];
    } = {} as {
      [key: string]: Billing[];
    };
    for (const bill of allBills) {
      const billDate = new Date(bill.billingDate);
      if (filterDateBy === FILTER_BY.DATE) {
        const arry =
          billWithDateHeader[
            MMM[billDate.getMonth()] +
              billDate.getDate() +
              ', ' +
              billDate.getFullYear()
          ] || [];
        arry.push(bill);
        billWithDateHeader[
          MMM[billDate.getMonth()] +
            billDate.getDate() +
            ', ' +
            billDate.getFullYear()
        ] = [...arry];
      } else if (filterDateBy === FILTER_BY.MONTH) {
        const arry =
          billWithDateHeader[
            MMM[billDate.getMonth()] + ', ' + billDate.getFullYear()
          ] || [];
        arry.push(bill);
        billWithDateHeader[
          MMM[billDate.getMonth()] + ', ' + billDate.getFullYear()
        ] = [...arry];
      } else if (filterDateBy === FILTER_BY.YEAR) {
        const arry = billWithDateHeader[billDate.getFullYear()] || [];
        arry.push(bill);
        billWithDateHeader[billDate.getFullYear()] = [...arry];
      }
    }

    const headers: string[] = Object.keys(billWithDateHeader);
    const billingReport: BillingReport[] = [];

    for (const header of headers) {
      const listOfBilling: Billing[] = billWithDateHeader[header];
      billingReport.push(this.createSingleBillObj(listOfBilling, header));
    }

    return billingReport;
  };

  createSingleBillObj = (bills: Billing[], key: string): BillingReport => {
    const billingReport: BillingReport = {} as BillingReport;

    bills.forEach((b: Billing) => {
      billingReport.Ptotal = (billingReport.Ptotal || 0) + b.Ptotal;
      billingReport.Stotal = (billingReport.Stotal || 0) + b.Stotal;
      billingReport.tax = (billingReport.tax || 0) + b.tax;
      billingReport.paid = (billingReport.paid || 0) + b.paid;
      billingReport.discount = (billingReport.discount || 0) + b.discount;
      billingReport.billingDate = key;
      billingReport.billNumber = bills.length + '';
    });
    return billingReport;
  };

  createSingleItemWiseReport = (
    bills: ItemWiseReport[],
    key: string,
  ): ItemWiseReport => {
    const itemWiseReport: ItemWiseReport = {} as ItemWiseReport;

    bills.forEach((b: ItemWiseReport) => {
      itemWiseReport.discount = (itemWiseReport.discount || 0) + b.discount;
      itemWiseReport.priceAmount =
        (itemWiseReport.priceAmount || 0) + b.priceAmount;
      itemWiseReport.sellingAmount =
        (itemWiseReport.sellingAmount || 0) + b.sellingAmount;
      itemWiseReport.itemCount = (itemWiseReport.itemCount || 0) + b.itemCount;
      itemWiseReport.total = (itemWiseReport.total || 0) + b.total;
      itemWiseReport.date = key;
      itemWiseReport.itemName = b.itemName;
    });
    return itemWiseReport;
  };

  getItemWiseCountBill = (bills: Billing[]) => {
    const bItemDic: any = {};
    bills.forEach((bill: Billing) => {
      bill.billingItemList.forEach((bit: BillingItem) => {
        const itemReport: ItemReport = {} as ItemReport;
        itemReport.itemID = bit.itemID;
        itemReport.itemName = bit.itemName;
        itemReport.discount = bit.discount;
        itemReport.priceAmount = bit.priceAmount;
        itemReport.sellingAmount = bit.sellingAmount;
        itemReport.itemCount = bit.itemCount;
        itemReport.total =
          (bit.sellingAmount -
            bit.priceAmount -
            (bit.isDiscountInPercentage
              ? bit.sellingAmount * (1 - bit.discount / 100)
              : bit.discount)) *
          itemReport.itemCount;
        if (bItemDic[bit.itemID] !== undefined) {
          itemReport.discount += bItemDic[bit.itemID].discount;
          itemReport.priceAmount += bItemDic[bit.itemID].priceAmount;
          itemReport.sellingAmount += bItemDic[bit.itemID].sellingAmount;
          itemReport.itemCount += bItemDic[bit.itemID].itemCount;
          itemReport.total += bItemDic[bit.itemID].total;
        }
        bItemDic[bit.itemID] = { ...itemReport };
      });
    });

    return bItemDic;
  };
}
