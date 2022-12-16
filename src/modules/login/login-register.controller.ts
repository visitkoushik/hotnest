import { Controller, Get } from '@nestjs/common';
import { LoginRegisterService } from './login-register.service';

@Controller('Login')
export class LoginRegisterController {
  constructor(private readonly appService: LoginRegisterService) {}

  @Get('list')
  findAll(): string {
    return this.appService.findAll();
  }
}
