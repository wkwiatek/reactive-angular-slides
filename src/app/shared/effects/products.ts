import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productsActions from '../actions/products';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../models/product';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {

  @Effect()
  getProducts$ = this.actions$
    .pipe(
      // Change to asyncGetProduct to get types
      ofType(productsActions.asyncGetProducts.types.INIT),
      switchMap(() => this.productsService.getProducts().pipe(
        // The payload shape is still being tracked
        map((payload: IProduct[]) => productsActions.asyncGetProducts.success(payload)),
        catchError((error: any) => of(productsActions.asyncGetProducts.failure(error)))
      ))
    );

  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
