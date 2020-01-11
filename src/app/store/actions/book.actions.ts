import { Action } from '@ngrx/store';
import { Book } from '../../models/book.model';

export enum EBookActions {
  GetBooks = '[Book] Get Books',
  GetBooksSuccess = '[Book] Get Books Success',
  GetBook = '[Book] Get Book',
  GetBookSuccess = '[Book] Get Book Success'
}

export class GetBooks implements Action {
  public readonly type = EBookActions.GetBooks;
}

export class GetBooksSuccess implements Action {
  public readonly type = EBookActions.GetBooksSuccess;
  constructor(public payload: Book[]) {}
}

export class GetBook implements Action {
  public readonly type = EBookActions.GetBook;
  constructor(public payload: number) {}
}

export class GetBookSuccess implements Action {
  public readonly type = EBookActions.GetBookSuccess;
  constructor(public payload: Book) {}
}

export type BookActions = GetBooks | GetBooksSuccess | GetBook | GetBookSuccess;
