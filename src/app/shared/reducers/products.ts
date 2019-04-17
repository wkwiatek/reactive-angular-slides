import { IProduct } from '../models/product';
import * as productsActions from '../actions/products';

export const initialState: IProduct[] = [];

export default function reducer(state = initialState, action: any): IProduct[] {
  switch (action.type) {
    case productsActions.asyncGetProducts.types.SUCCESS:
      return action.payload;
    case productsActions.BUY_PRODUCT:
      return state.filter(p => p.id !== action.payload);
    default: {
      return state;
    }
  }
}

