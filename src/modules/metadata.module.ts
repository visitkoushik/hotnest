import { Module } from '@nestjs/common';

import { MetadataController } from 'src/controlers/metadata.controller';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [MetadataController],
})
export class MetaDataModule {}
