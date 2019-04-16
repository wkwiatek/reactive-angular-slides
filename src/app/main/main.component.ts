import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public products: IProduct[] = [{
    id: 0,
    name: 'coffee',
    price: 2.05
  }, {
    id: 1,
    name: 'apple',
    price: 0.95
  }];

  //5/ Callback can be used to trigger product ID that became unavailable
  private isNotAvailable(callback: (id: string | number) => void) {
    setTimeout(() => {
      callback(1);
    }, 2000);
  }

  ngOnInit() {
    //4/ And that's how we use it
    this.isNotAvailable(id => {
      const product = this.products.find(p => p.id === id);
      product.isSoldOut = true;
    });
  }

  public handleBuyProduct(id: number | string) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
