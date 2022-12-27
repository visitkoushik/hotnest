import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
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
        .status(HttpStatus.UNAUTHORIZED)
        .json(new AppResponse(0, null, e.message));
    }
  }
  @Post('/logout')
  async logout(@Res() response: Response, @Req() request: Request) {
    try {
      const userlogin = await this.moduleService.logOut(request.body);
      response.status(HttpStatus.OK).json(new AppResponse(1, userlogin, null));
    } catch (e) {
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json(new AppResponse(0, null, e.message));
    }
  }

  @Post('/changepassword')
  async changePass(@Res() response: Response, @Req() request: Request) {
    try {
      const msg: string = await this.moduleService.changePass(request.body);
      response.status(HttpStatus.OK).json(new AppResponse(1, msg, null));
    } catch (e) {
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json(new AppResponse(0, null, e.message));
    }
  }
}
