import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../common/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product = new Product(1, '', 0, '');

  @Output()
  deleteProductEmit: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  onUpdateEmit: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(): void {
    console.log("Hello world");
  }
}
