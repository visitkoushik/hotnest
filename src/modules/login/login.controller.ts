import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('Login')
export class LoginController {
  constructor(private readonly appService: LoginService) {}

  @Get('list')
  findAll(): string {
    return this.appService.findAll();
  }
}
