import { Prop, Schema } from '@nestjs/mongoose';
import { BaseEntity } from './BaseEntity';
import { BaseSchema } from './BaseSchema';

@Schema()
export class Branch extends BaseEntity {
  @Prop({ required: true, maxlength: 30 })
  name: string;

  @Prop({ require: true })
  available: boolean;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop()
  address: string;

  @Prop()
  items: string[];
}

export const BranchSchema = BaseSchema.createForClass(Branch);
export const BranchImpl = { name: Branch.name, schema: BranchSchema };
