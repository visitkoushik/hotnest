import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/appServices/baseService';
import { Category } from 'src/models/Category';

@Injectable()
export class CategoryService implements BaseService<Category> {
  findAll<Category>(authKey: string): Category[] {
    const list: Category[] = [] as Category[];
    return list;
  }
}
