import { Action } from '@ngrx/store';

export const BUY_PRODUCT = 'BUY PRODUCT';

export class BuyProductAction implements Action {
  readonly type = BUY_PRODUCT;

  constructor(public payload: number | string) { }
}

export type Actions = BuyProductAction;
