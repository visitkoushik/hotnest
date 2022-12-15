export class Category {
  id: string;
  categoryName: string;
  available: boolean;
  // items:Item[]=[];

  constructor(id: string, categoryName: string, available: boolean) {
    this.id = id;
    this.categoryName = categoryName;
    this.available = available;

  }
}
