import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { IProduct } from '../models/product';
import products from './products';

export interface IState {
  products: IProduct[];
}

export const reducers: ActionReducerMap<IState> = {
  products
};

export const getProducts = createFeatureSelector('products');
export const getProductsSlice = createSelector(getProducts, state => state);
