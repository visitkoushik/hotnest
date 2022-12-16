import { BaseEntity } from './BaseEntity';
import { Category } from './Category';

export class Item extends BaseEntity {
  itemName: string;
  description: string;
  available: boolean;
  category: Category[];
  priceAmount: number[];
  sellingAmount: number[];

  constructor(
    itemName: string,
    description: string,
    available: boolean,
    category: Category[],
    priceAmount: number[],
    sellingAmount: number[],
  ) {
    super();

    this.itemName = itemName;
    this.description = description;
    this.available = available;
    this.category = [...category];
    this.priceAmount = priceAmount;
    this.sellingAmount = sellingAmount;
  }
}
