import { Body, Controller, Get, Post } from '@nestjs/common';
import { Login } from 'src/models/Login';
import { LoginRegisterService } from './login-register.service';

@Controller('Login')
export class LoginRegisterController {
  constructor(private readonly moduleService: LoginRegisterService) {}

  @Post('add')
  addCategory(@Body() login: Login): any {
    login.active = true;
    const generatedResult = this.moduleService.insert(login);
    return generatedResult;
  }
}
