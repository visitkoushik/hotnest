import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppResponse } from 'src/models/AppResponse';
import { MetaData } from 'src/models/MetaData';

@Controller('metadata')
export class MetadataController {
  @Get()
  list(@Res() response: Response) {
    response
      .status(HttpStatus.OK)
      .json(new AppResponse(1, new MetaData().getMenu(), null)); //
  }
}
