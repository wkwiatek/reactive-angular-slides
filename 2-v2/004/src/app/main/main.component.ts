import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { Observable } from 'rxjs';

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

  private subscription;

  private isNotAvailable = Observable.create(subscriber => {
    setTimeout(() => {
      // Let's add a log
      console.info('time passed out');
      subscriber.next(1);
    }, 2000);
  });

  ngOnInit() {
    this.subscription = this.isNotAvailable.subscribe(id => {
      const product = this.products.find(p => p.id === id);
      product.isSoldOut = true;
    });
  }

  public stopCounting() {
    this.subscription.unsubscribe();
  }

  public handleBuyProduct(id: number | string) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
