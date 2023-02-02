import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/services/BaseServices';
import { Transaction } from 'src/models/Transaction';

@Injectable()
export class TransactionService extends BaseService<Transaction> {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<Transaction>,
  ) {
    super(transactionModel);
  }

  getTotal = (list: Transaction[]): { totalCr: number; totalDr: number } => {
    let totalCr = 0;
    let totalDr = 0;
    list.forEach((e: Transaction) => {
      totalCr += e.transactionType === 'Cr' ? e.amount : 0;
      totalDr += e.transactionType === 'Dr' ? e.amount : 0;
    });
    return { totalCr, totalDr };
  };
}
