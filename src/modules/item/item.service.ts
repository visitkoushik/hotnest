import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  findAll(): string {
    return 'Item Hello World!';
  }
}
