export class Product {
  id?: number;
  name: string;
  description?: string;
  price: number;

  constructor(id: number, name: string, price: number, description?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

}