import { Module } from '@nestjs/common';
import { LoginRegisterController } from './login-register.controller';
import { LoginRegisterService } from './login-register.service';

@Module({
  imports: [],
  controllers: [LoginRegisterController],
  providers: [LoginRegisterService],
})
export class LoginRegisterModule {}
