import { ActionReducerMap } from '@ngrx/store';
import { IProduct } from '../models/product';
import products from './products';

//3/ We can keep a state interface
export interface IState {
  products: IProduct[];
}

//3/ Just export all reducers
export const reducers: ActionReducerMap<IState> = {
  products
};
