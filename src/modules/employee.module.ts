import { Module } from '@nestjs/common';
import { EmployeeImpl } from 'src/models/Employee';
import { EmployeeController } from '../controlers/employee.controller';
import { EmployeeService } from '../services/employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginImpl } from 'src/models/Login';
import { LoginRegisterService } from 'src/services/login-register.service';

@Module({
  imports: [MongooseModule.forFeature([EmployeeImpl, LoginImpl])],
  controllers: [EmployeeController],
  providers: [EmployeeService, LoginRegisterService],
})
export class EmployeeModule {}
