import { BaseEntity } from './BaseEntity';

export class Category extends BaseEntity {
  categoryName: string;
  available: boolean;

  constructor(categoryName: string, available: boolean) {
    super();
    this.categoryName = categoryName;
    this.available = available;
  }
}
