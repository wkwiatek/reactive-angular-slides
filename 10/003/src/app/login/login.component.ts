import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts, IState } from '../shared/reducers/index';
import { ILoginState, isFormVisible } from './reducers/index';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../shared/models/product';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public products$: Observable<IProduct[]>;
  public isFormVisible$: Observable<boolean>;

  // We can inject store as we always did
  constructor(private store: Store<IState | ILoginState>) {
    //2/ And we're getting access to both parts - login, and products
    this.products$ = store.select(getProducts);
    this.isFormVisible$ = store.select(isFormVisible);
  }

  ngOnInit() {
  }

}
