import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[];
  @Output() bookSelected: EventEmitter<number> = new EventEmitter();
  coverPath = 'assets/images/';

  constructor() {}

  ngOnInit() {
    console.log(this.books);
  }

  navigateToBook(id: number) {
    this.bookSelected.emit(id);
  }
}
