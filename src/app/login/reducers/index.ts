import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ILoginState {
  ui: {
    isFormVisible: boolean
  }
}

const initialState = {
  ui: {
    isFormVisible: true,
  }
};

export function loginReducer(state = initialState, action: any): ILoginState {
  switch (action.type) {
    default:
      return state;
  }
}

export const login = createFeatureSelector('login');
export const isFormVisible = createSelector(login,(state: any) => state.ui.isFormVisible);
