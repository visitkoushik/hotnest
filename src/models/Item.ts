class Item {
  id: string;
  itemName: string;
  description: string;
  available: boolean;
  category_id: string[];
  priceAmount: number[];
  sellingAmount: number[];

  constructor(
    id: string,
    itemName: string,
    description: string,
    available: boolean,
    category_id: string[],
    priceAmount: number[],
    sellingAmount: number[],
  ) {
    this.id = id;
    this.itemName = itemName;
    this.description = description;
    this.available = available;
    this.category_id = category_id;
    this.priceAmount = priceAmount;
    this.sellingAmount = sellingAmount;
  }
}
