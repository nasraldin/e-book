import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../models/book.model';
import { ConvertHelper } from 'src/app/utils/convert-helper';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[];
  @Output() bookSelected: EventEmitter<number> = new EventEmitter();

  coverPath = 'assets/images/';

  // convert helpers
  util = ConvertHelper;

  searchQuery: string;
  noSearchResult: boolean;
  public config: PaginationInstance = {
    itemsPerPage: 4,
    currentPage: 1
  };

  constructor() {}

  ngOnInit() {}

  navigateToBook(id: number) {
    this.bookSelected.emit(id);
  }

  setStatus() {
    this.noSearchResult = !this.noSearchResult;
  }

  // DOTO: this for test and need to refactory with story approach
  randomRating(books: Book[]) {
    books.forEach(book => {
      book.rating = Math.floor(Math.random() * Math.floor(5)) + 1;
    });
  }
}
