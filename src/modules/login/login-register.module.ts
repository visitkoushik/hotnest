import { Module } from '@nestjs/common';
import { LoginRegisterController } from './login-register.controller';
import { LoginRegisterService } from './login-register.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginImpl } from 'src/models/Login';

@Module({
  imports: [MongooseModule.forFeature([LoginImpl])],
  controllers: [LoginRegisterController],
  providers: [LoginRegisterService],
})
export class LoginRegisterModule {}
