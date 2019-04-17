import { ActionReducerMap } from '@ngrx/store';
import { IProduct } from '../models/product';
import products from './products';

export interface IState {
  products: IProduct[];
}

export const reducers: ActionReducerMap<IState> = {
  products
};
