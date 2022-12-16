import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginRegisterService {
  findAll(): string {
    return 'Login Hello World!';
  }
}
