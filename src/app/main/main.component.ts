import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { Observable } from 'rxjs/Observable';

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

  //5/ Observable can handle this task as well
  private isNotAvailable = Observable.create(subscriber => {
    setTimeout(() => {
      subscriber.next(1);
    }, 2000);
  });

  ngOnInit() {
    //4/ Instead of .then(), we now .subscribe()
    this.subscription = this.isNotAvailable.subscribe(id => {
      const product = this.products.find(p => p.id === id);
      product.isSoldOut = true;
    });
  }

  public handleBuyProduct(id: number | string) {
    this.products = this.products.filter(p => p.id !== id);
  }

  //3/ Now we can clear our subscription
  public stopCounting() {
    this.subscription.unsubscribe();
  }

}
