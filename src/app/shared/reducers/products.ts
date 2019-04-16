import { IProduct } from '../models/product';
import * as productsActions from '../actions/products';

export const initialState: IProduct[] = [{
  id: 0,
  name: 'coffee',
  price: 2.05
}, {
  id: 1,
  name: 'apple',
  price: 0.95
}, {
  id: 2,
  name: 'pizza',
  price: 5.6
}];

export default function reducer(state = initialState, action: productsActions.Actions): IProduct[] {
  switch (action.type) {
    case productsActions.BUY_PRODUCT:
      return state.filter(p => p.id !== action.payload);
    default: {
      return state;
    }
  }
}
