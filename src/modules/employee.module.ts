import { Module } from '@nestjs/common';
import { EmployeeImpl } from 'src/models/Employee';
import { EmployeeController } from '../controlers/employee.controller';
import { EmployeeService } from '../services/employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginImpl } from 'src/models/Login';
import { LoginRegisterService } from 'src/services/login-register.service';
import { LoginRegisterModule } from './login-register.module';
import { AccessService } from 'src/services/access.service';

@Module({
  imports: [MongooseModule.forFeature([EmployeeImpl]), LoginRegisterModule],
  controllers: [EmployeeController],
  exports: [EmployeeService],
  providers: [EmployeeService, AccessService],
})
export class EmployeeModule {}
