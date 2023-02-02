import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemController } from 'src/controlers/item.controller';
import { TransactionController } from 'src/controlers/Transaction.controller';
import { TransactionImpl } from 'src/models/Transaction';
import { AccessService } from 'src/services/access.service';
import { ItemService } from 'src/services/item.service';
import { TransactionService } from 'src/services/Transaction.service';
import { BranchModule } from './branch.module';
import { CategoryModule } from './categor.module';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [
    MongooseModule.forFeature([TransactionImpl]),
    EmployeeModule,
    CategoryModule,
    BranchModule,
  ],
  controllers: [TransactionController],
  exports: [TransactionService],
  providers: [TransactionService, AccessService],
})
export class TransactionModule {}
