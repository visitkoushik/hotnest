import { Prop, Schema } from '@nestjs/mongoose';
import { BaseEntity } from './BaseEntity';
import * as mongoose from 'mongoose';
import { BaseSchema } from './BaseSchema';

export type TransactionDocument = Transaction & mongoose.Document;
@Schema()
export class Transaction extends BaseEntity {
  @Prop({ maxlength: 40 })
  perticulars: string;
  @Prop({ default: 0, required: true })
  amount: number;
  @Prop({ default: new Date().toISOString() })
  transactionDate: Date;
  @Prop()
  transactionType: 'Cr' | 'Dr';
  @Prop()
  branchCode: string;
}

export const TransactionSchema = BaseSchema.createForClass(Transaction);

export const TransactionImpl = {
  name: Transaction.name,
  schema: TransactionSchema,
};
