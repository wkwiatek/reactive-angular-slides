import { Action } from '@ngrx/store';

// All constants will be exported
export const BUY_PRODUCT = 'BUY PRODUCT';

//5/ Implementing Action interface gives us check for type presence and optional payload
export class BuyProductAction implements Action {
  readonly type = BUY_PRODUCT;

  constructor(public payload: number | string) { }
}

// Actions type can be exported to be used by reducer
export type Actions = BuyProductAction;
