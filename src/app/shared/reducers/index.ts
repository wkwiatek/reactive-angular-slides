import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { IProduct } from '../models/product';
import products from './products';

export interface IState {
  products: IProduct[];
}

export const reducers: ActionReducerMap<IState> = {
  products
};

// Feature selector is used for top level (reducer name)
export const getProducts = createFeatureSelector('products');
// We can also access whole part of the state and select nested values
export const getProductsSlice = createSelector(getProducts, state => state);
