import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // Input to Product component is just a product
  @Input() product: IProduct;
  // We'll handle click on Buy with EventEmitter
  @Output() buyProductClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

}
