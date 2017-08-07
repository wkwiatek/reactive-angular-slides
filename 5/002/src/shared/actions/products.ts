import { Action } from '@ngrx/store';
import { IProduct } from '../models/product';

export const BUY_PRODUCT = 'BUY PRODUCT';

//34/ Bunch of actions we need now
export const GET_PRODUCTS_INIT = 'GET_PRODUCTS_INIT';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

export class BuyProductAction implements Action {
  readonly type = BUY_PRODUCT;

  constructor(public payload: number | string) { }
}

export class GetProductsInitAction implements Action {
  readonly type = GET_PRODUCTS_INIT;

  constructor() { }
}

export class GetProductsSuccessAction implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;

  constructor(public payload: IProduct[]) { }
}

export class GetProductsFailureAction implements Action {
  readonly type = GET_PRODUCTS_FAILURE;

  constructor(public payload: any) { }
}

export type Actions
  = BuyProductAction
  | GetProductsInitAction
  | GetProductsSuccessAction
  | GetProductsFailureAction;
