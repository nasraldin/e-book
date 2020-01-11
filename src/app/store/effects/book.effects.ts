import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetBooksSuccess,
  EBookActions,
  GetBookSuccess,
  GetBook,
  GetBooks
} from '../actions/book.actions';
import { BookService } from '../../services/book.service';
import { BookHttp } from '../../models/book-http.model';
import { selectBookList } from '../selectors/book.selector';

@Injectable()
export class BookEffects {
  @Effect()
  getBook$ = this.actions$.pipe(
    ofType<GetBook>(EBookActions.GetBook),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectBookList))),
    switchMap(([id, books]) => {
      const selectedBook = books.filter(book => book._id === +id)[0];
      return of(new GetBookSuccess(selectedBook));
    })
  );

  @Effect()
  getBooks$ = this.actions$.pipe(
    ofType<GetBooks>(EBookActions.GetBooks),
    switchMap(() => this.bookService.getBooks()),
    switchMap((bookHttp: BookHttp) => of(new GetBooksSuccess(bookHttp.books)))
  );

  constructor(
    private bookService: BookService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}
}
