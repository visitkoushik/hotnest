import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  findAll(): string {
    return 'Login Hello World!';
  }
}
