import { localStorageSync } from 'ngrx-store-localstorage';
import { ActionReducer } from '@ngrx/store';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['products'], rehydrate: true })(reducer);
}
