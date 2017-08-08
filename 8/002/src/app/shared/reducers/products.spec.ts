import products from './products';
import { asyncGetProducts } from '../actions/products';
import { IProduct } from '../models/product';

// Tests should be recognized automatically by angular-cli
describe('[Reducer] Products', () => {

  it('should return new products for get products action', () => {

    //13/ We need an action, payload and the state; all of them will compose new state that has to be checked
    const newProducts: IProduct[] = [{
      id: 0,
      name: 'test',
      price: 0
    }];

    const initialProducts: IProduct[] = [{
      id: 1,
      name: 'beforeTest',
      price: 1
    }];

    const newState = products(initialProducts, asyncGetProducts.success(newProducts));

    // The idea is to check if after invoking reducer with proper action we get proper state
    expect(newState).toEqual(newProducts);

  });

});
