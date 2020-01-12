import { RouterReducerState } from '@ngrx/router-store';
import { IBookState, initialBookState } from './book.state';

export interface IAppState {
  router?: RouterReducerState;
  books: IBookState;
}

export const initialAppState: IAppState = {
  books: initialBookState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
