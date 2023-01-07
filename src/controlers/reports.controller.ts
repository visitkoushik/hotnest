import { Controller, Get, Headers, HttpStatus, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { AppResponse } from 'src/models/AppResponse';

@Controller('reports')
export class ReportsController {
  @Get()
  getReport(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    response
      .status(HttpStatus.OK)
      .json(new AppResponse(1, 'New Report Response', null));
  }
}
