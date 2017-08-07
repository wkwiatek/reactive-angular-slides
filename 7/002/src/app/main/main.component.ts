import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getProducts, IState } from '../shared/reducers/index';
import { IProduct } from '../shared/models/product';
import { BuyProductAction } from '../shared/actions/products';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public products$: Observable<IProduct[]>;

  constructor(private store: Store<IState>) {}

  ngOnInit() {
    // Instead of directly passing map function we can use selector
    this.products$ = this.store.select(getProducts);
  }

  public handleBuyProduct(id: number | string) {
    this.store.dispatch(new BuyProductAction(id));
  }

  public handleOrderSubmit(formValues: { product: string | number, email: string }) {
    console.log(formValues);
  }

}
