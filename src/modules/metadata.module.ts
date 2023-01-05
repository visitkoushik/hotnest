import { Module } from '@nestjs/common';

import { MetadataController } from 'src/controlers/metadata.controller';
import { AccessService } from 'src/services/access.service';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [MetadataController],
  providers: [AccessService],
})
export class MetaDataModule {}
