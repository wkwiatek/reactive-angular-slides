import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getProducts, IState } from '../shared/reducers';
import { asyncGetProducts, BuyProductAction } from '../shared/actions/products';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public products$: Observable<IProduct[]>;

  constructor(private store: Store<IState>) {}

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProducts));
  }

  public handleBuyProduct(id: number | string) {
    this.store.dispatch(new BuyProductAction(id));
  }

  public handleOrderSubmit(formValues: { product: string | number, email: string }) {
    console.log(formValues)
  }

}
