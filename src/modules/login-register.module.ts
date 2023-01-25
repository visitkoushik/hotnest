import { Module } from '@nestjs/common';
import { LoginRegisterController } from '../controlers/login-register.controller';
import { LoginRegisterService } from '../services/login-register.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginImpl } from 'src/models/Login';
import { EmployeeModule } from './employee.module';
import { EmployeeService } from 'src/services/employee.service';

@Module({
  imports: [MongooseModule.forFeature([LoginImpl])],
  controllers: [LoginRegisterController],
  exports: [LoginRegisterService],
  providers: [LoginRegisterService],
})
export class LoginRegisterModule {}
