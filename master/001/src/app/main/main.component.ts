import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  //7/ Data source will be in Main component
  public products: IProduct[] = [{
    id: 0,
    name: 'coffee',
    price: 2.05
  }, {
    id: 1,
    name: 'apple',
    price: 0.95
  }];

  constructor() { }

  ngOnInit() {
  }

  public handleBuyProduct(id: number | string) {
    this.products = this.products.filter(p => p.id !== id);
  }

}
