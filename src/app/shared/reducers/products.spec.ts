import products from './products';
import { asyncGetProducts } from '../actions/products';
import { IProduct } from '../models/product';

describe('[Reducer] Products', () => {

  it('should return new products for get products action', () => {

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

    expect(newState).toEqual(newProducts);

  });

});
