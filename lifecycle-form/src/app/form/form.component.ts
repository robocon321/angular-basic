import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../common/Product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output()
  onSubmitFormEmit: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  @Input()
  product?: Product = new Product(1, "", 30000, "");

  constructor() { }

  ngOnInit() {
  }

}
