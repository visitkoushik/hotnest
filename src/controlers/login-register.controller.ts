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
import { Login } from 'src/models/Login';
import { LoginRegisterService } from '../services/login-register.service';

@Controller('auth')
export class LoginRegisterController {
  constructor(private readonly moduleService: LoginRegisterService) {}

  @Post('/login')
  async login(@Res() response: Response, @Req() request: Request) {
    try {
      response
        .status(HttpStatus.OK)
        .json(await this.moduleService.login(request.body));
    } catch (e) {
      response.status(HttpStatus.UNAUTHORIZED).json(e.message);
    }
  }
  @Post('/logout')
  async logout(@Res() response: Response, @Req() request: Request) {
    try {
      response
        .status(HttpStatus.OK)
        .json(await this.moduleService.logOut(request.body));
    } catch (e) {
      response.status(HttpStatus.UNAUTHORIZED).json(e.message);
    }
  }

  @Post('/changepassword')
  async changePass(@Res() response: Response, @Req() request: Request) {
    try {
      response
        .status(HttpStatus.OK)
        .json(await this.moduleService.changePass(request.body));
    } catch (e) {
      response.status(HttpStatus.UNAUTHORIZED).json(e.message);
    }
  }
}
