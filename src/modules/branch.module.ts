import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessService } from 'src/services/access.service';
import { BranchController } from 'src/controlers/branch.controller';
import { BranchService } from 'src/services/branch.service';
import { BranchImpl } from 'src/models/Branch';
import { EmployeeService } from 'src/services/employee.service';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [MongooseModule.forFeature([BranchImpl]), EmployeeModule],
  controllers: [BranchController],
  exports: [BranchService],
  providers: [AccessService, BranchService],
})
export class BranchModule {}
