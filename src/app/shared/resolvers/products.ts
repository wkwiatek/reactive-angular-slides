import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ofType, Actions } from '@ngrx/effects';
import { take } from 'rxjs/operators';
import { IState } from '../reducers';
import { asyncGetProducts } from '../actions/products';

@Injectable()
export class ProductsResolver implements Resolve<Action> {

  constructor(private actions$: Actions, private store: Store<IState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Action> {
    this.store.dispatch(asyncGetProducts.init());
    return this.actions$
      .pipe(
        ofType(asyncGetProducts.types.SUCCESS, asyncGetProducts.types.FAILURE),
        take(1)
      );
  }

}
