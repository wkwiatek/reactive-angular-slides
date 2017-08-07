import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as productsActions from '../actions/products';
import { ProductsService } from '../../app/shared/services/products.service';
import { IProduct } from '../models/product';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsEffects {

  @Effect()
  getProducts$ = this.actions$
    // Change to asyncGetProduct to get types
    .ofType(productsActions.asyncGetProducts.types.INIT)
    .map(toPayload)
    .switchMap(() => this.productsService.getProducts()
      // The payload shape is still being tracked
      .map((payload: IProduct[]) => productsActions.asyncGetProducts.success(payload))
      .catch((error: any) => of(productsActions.asyncGetProducts.failure(error)))
    );

  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
