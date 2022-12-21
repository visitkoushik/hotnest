import * as mongoose from 'mongoose';

export class BaseEntity {
  id: mongoose.Schema.Types.ObjectId;
}
