import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { MetadataController } from 'src/controlers/metadata.controller';
import { EmployeeImpl } from 'src/models/Employee';
import { LoginImpl } from 'src/models/Login';
import { EmployeeService } from 'src/services/employee.service';
import { LoginRegisterService } from 'src/services/login-register.service';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [MongooseModule.forFeature([EmployeeImpl, LoginImpl])],
  controllers: [MetadataController],
  providers: [EmployeeService, LoginRegisterService],
})
export class MetaDataModule {}
