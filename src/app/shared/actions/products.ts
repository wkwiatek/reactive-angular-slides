import { Action } from '@ngrx/store';
import { IProduct } from '../models/product';
import { asyncActionCreatorFactory } from '../utils/async-action-creator-factory';

export const BUY_PRODUCT = 'BUY PRODUCT';

export const asyncGetProducts = asyncActionCreatorFactory<null, IProduct[], any>('GET_PRODUCTS');

export class BuyProductAction implements Action {
  readonly type = BUY_PRODUCT;

  constructor(public payload: number | string) { }
}

export type Actions = BuyProductAction
