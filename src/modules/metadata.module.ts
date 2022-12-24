import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { MetadataController } from 'src/controlers/metadata.controller';
import { EmployeeImpl } from 'src/models/Employee';
import { EmployeeService } from 'src/services/employee.service';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [MongooseModule.forFeature([EmployeeImpl])],
  controllers: [MetadataController],
  providers: [EmployeeService],
})
export class MetaDataModule {}
