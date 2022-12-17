import { Module } from '@nestjs/common';
import { EmployeeImpl } from 'src/models/Employee';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginImpl } from 'src/models/Login';

@Module({
  imports: [MongooseModule.forFeature([EmployeeImpl, LoginImpl])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
