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

  constructor(private actions$: Actions, private store: Store<IState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Action> {
    this.store.dispatch(asyncGetProducts.init());
    return this.actions$
      .ofType(asyncGetProducts.types.SUCCESS, asyncGetProducts.types.FAILURE)
      .take(1);
  }

}
