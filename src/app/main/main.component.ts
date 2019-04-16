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

  //5/ Promise is built-in feature now
  private isNotAvailable = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });


  ngOnInit() {
    //4/ We can make it cleaner, and forget about callback hell
    this.isNotAvailable.then(id => {
      const product = this.products.find(p => p.id === id);
      product.isSoldOut = true;
    });
  }

  //3/ But what if we want to stop counting?
  public stopCounting() {
    console.info('how to stop a promise?');
  }

  public handleBuyProduct(id: number | string) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
