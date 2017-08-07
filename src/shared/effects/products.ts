import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
// We can take all of actions at once and keep them in new variable
import * as productsActions from '../actions/products';
import { ProductsService } from '../../app/shared/services/products.service';
import { IProduct } from '../models/product';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsEffects {

  // Effect decorator dispatches an action as the result, actions$ are just a stream of all actions
  @Effect()
  getProducts$ = this.actions$
    // .ofType filters all actions
    .ofType(productsActions.GET_PRODUCTS_INIT)
    // toPayload helper gets just payload field from incoming action
    .map(toPayload)
    // switchMap is handy for cancelling previous request when the one comes - see mergeMap, exhaustMap or concatMap too
    .switchMap(() => this.productsService.getProducts()
      // products can be mapped to success action that will be eventually dispatched
      .map((payload: IProduct[]) => new productsActions.GetProductsSuccessAction(payload))
      // or we can create an observable with given error
      .catch((error: any) => of(new productsActions.GetProductsFailureAction(error)))
    );

  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
