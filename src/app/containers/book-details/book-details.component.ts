import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '../../store/state/app.state';
import { selectSelectedBook } from '../../store/selectors/book.selector';
import { GetBook } from '../../store/actions/book.actions';

@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsContainerComponent implements OnInit {
  book = this.store.pipe(select(selectSelectedBook));

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}

  ngOnInit() {
    this.store.dispatch(new GetBook(this.route.snapshot.params.id));
  }
}
