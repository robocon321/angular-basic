import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../common/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product(1, "Product 1", 100000, "Description 1"),
    new Product(2, "Product 2", 200000, "Description 2"),
    new Product(3, "Product 3", 220000, "Description 3"),
  ]

  product?: Product = new Product(0, '', 10000);

  onSubmitForm(form: NgForm): void {
    if(this.product!.id == undefined) {
      this.products.push(new Product(new Date().getTime(), form.value.name, parseInt(form.value.price), form.value.description));
    } else {
      this.products = this.products.map(item => {
        if(this.product!.id != item.id) {
          return item;
        }  else {
          return this.product!;
        }
      })
    }
  }

  onUpdate(id: number) {
    this.product = structuredClone(this.products.find(item => item.id == id));
  }

  onDeleteById(id: number): void {
    this.products = this.products.filter(item => item.id !== id);
  }

  constructor() { }

  ngOnInit() {
  }

}
