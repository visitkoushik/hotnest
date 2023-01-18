import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  Headers,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppResponse } from 'src/models/AppResponse';
import { Login } from 'src/models/Login';
import { LoginRegisterService } from '../services/login-register.service';

@Controller('auth')
export class LoginRegisterController {
  constructor(private readonly moduleService: LoginRegisterService) {}

  @Post('/login')
  async login(@Res() response: Response, @Req() request: Request) {
    try {
      const userlogin = await this.moduleService.login(request.body);
      response.status(HttpStatus.OK).json(new AppResponse(1, userlogin, null));
    } catch (e) {
      console.log('================Login Controler==================', e);
      response
        .status(HttpStatus.NOT_ACCEPTABLE)
        .json(new AppResponse(0, null, e.message));
    }
  }
  @Post('/logout')
  async logout(
    @Res() response: Response,
    @Req() request: Request,
    @Headers() headers,
  ) {
    const authcode: string = headers['auth-code'];
    try {
      this.moduleService
        .logOut(authcode)
        .then((e) => {
          response.status(HttpStatus.OK).json(new AppResponse(1, e, null));
        })
        .catch((e) => {
          response
            .status(HttpStatus.UNAUTHORIZED)
            .json(new AppResponse(0, null, e));
        });
    } catch (e) {
      response
        .status(HttpStatus.NOT_ACCEPTABLE)
        .json(new AppResponse(0, null, e.message));
    }
  }
}
