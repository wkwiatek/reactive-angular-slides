import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IState } from '../shared/reducers';

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
