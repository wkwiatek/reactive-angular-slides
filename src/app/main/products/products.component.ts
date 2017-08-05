import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: IProduct[];
  @Output() buyProductClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
