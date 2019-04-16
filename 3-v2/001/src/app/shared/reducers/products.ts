import { IProduct } from '../models/product';

//14/ State that previously was in a component now goes here
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

//7/ Hence we have no actions yet, we're just returning the same state always
export default function reducer(state = initialState, action: any): IProduct[] {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
