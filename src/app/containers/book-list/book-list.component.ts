import { GetBooks } from './../../store/actions/book.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectBookList } from '../../store/selectors/book.selector';
import { Router } from '@angular/router';

@Component({
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListContainerComponent implements OnInit {
  books = this.store.pipe(select(selectBookList));

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetBooks());
  }

  navigateToBook(id: number) {
    this.router.navigate(['details', id]);
  }
}
