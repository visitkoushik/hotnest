import { Schema, InferSchemaType } from 'mongoose';

const schema = new Schema({
  authCode: { type: String, required: false },
  userID: { type: String, required: false },
  passCode: { type: String, required: true },
  userName: { type: String, required: true },
  active: { type: Boolean, require: true },
});

export type Login = InferSchemaType<typeof schema>;
export const LoginImpl = { name: 'Login', schema };
