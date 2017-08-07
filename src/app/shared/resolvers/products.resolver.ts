import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { IState } from '../reducers/index';
import { Observable } from 'rxjs/Observable';
import { asyncGetProducts } from '../actions/products';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/take';

@Injectable()
export class ProductsResolver implements Resolve<Action> {

  // Actions stream can be helpful
  constructor(private actions$: Actions, private store: Store<IState>) {}

  //6/ In resolver we can first dispatch the init actions, and then wait for either success or failure
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Action> {
    this.store.dispatch(asyncGetProducts.init());
    return this.actions$
      .ofType(asyncGetProducts.types.SUCCESS, asyncGetProducts.types.FAILURE)
      .take(1);
  }

}
