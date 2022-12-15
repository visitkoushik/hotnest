import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  findAll(): string {
    return 'Customer Hello World!';
  }
}
