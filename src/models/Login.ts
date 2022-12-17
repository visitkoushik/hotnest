import { Prop, Schema } from '@nestjs/mongoose';
import { BaseSchema } from './BaseSchema';

export type LoginDocument = Login & Document;

@Schema()
export class Login {
  @Prop({ required: false })
  authCode: string;

  @Prop({ required: false })
  userID: string;

  @Prop({ required: true, minlength: 8, maxlength: 50 })
  passcode: string;

  @Prop({ required: true, unique: true, minlength: 8, maxlength: 50 })
  userName: string;

  @Prop({ required: true })
  active: boolean;
}

export const schema = BaseSchema.createForClass(Login);
export const LoginImpl = { name: Login.name, schema };
