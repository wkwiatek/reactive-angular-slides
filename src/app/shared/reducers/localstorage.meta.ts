import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer) {
  return localStorageSync({ keys: ['products'], rehydrate: true })(reducer);
}
