import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IState } from '../../shared/reducers/index';
import { IProduct } from '../../shared/models/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // products are now stream of products
  public products$: Observable<IProduct[]>;

  // To use store we have to inject it first
  constructor(private store: Store<IState>) {}

  ngOnInit() {
    // ngrx gives us store and select function that can give us some part of state
    this.products$ = this.store.select(state => state.products);
  }

  public handleBuyProduct(id: number | string) {}

}
