import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

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

  constructor() { }

  private subscription;

  private isNotAvailable = Observable.create(subscriber => {
    setTimeout(() => {
      console.info('time passed out');
      subscriber.next(1);
    }, 2000);
  // Let's make it HOT!
  }).share();

  ngOnInit() {
    this.subscription = this.isNotAvailable.subscribe(id => {
      const product = this.products.find(p => p.id === id);
      product.isSoldOut = true;
    });

    //3/ What's going to happen now?
    this.isNotAvailable.subscribe();
    this.isNotAvailable.subscribe();
    this.isNotAvailable.subscribe();
  }

  public handleBuyProduct(id: number | string) {
    this.products = this.products.filter(p => p.id !== id);
  }

  public stopCounting() {
    this.subscription.unsubscribe();
  }

}
