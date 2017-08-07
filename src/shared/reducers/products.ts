import { IProduct } from '../models/product';
import * as productsActions from '../actions/products';

export const initialState: IProduct[] = [];

export default function reducer(state = initialState, action: productsActions.Actions): IProduct[] {
  switch (action.type) {
    //2/ We need an action just for successfully taken products
    case productsActions.GET_PRODUCTS_SUCCESS:
      return action.payload;
    case productsActions.BUY_PRODUCT:
      return state.filter(p => p.id !== action.payload);
    default: {
      return state;
    }
  }
}
