import { BookService } from './../../services/book.service';
import { Observable, of } from 'rxjs';
import { Book } from './../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { ConvertHelper } from '../../utils/convert-helper';
import { PaginationInstance } from 'ngx-pagination';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
  // providers: [Web3Service]
})
export class BookListComponent implements OnInit {
  // eventsModel: ContractEvent[];
  gridItems$: Observable<Book[]>;

  searchQuery: string;
  noSearchResult: boolean;
  public config: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1
  };

  // convert helpers
  substring = ConvertHelper.substringTo26Chart;
  unixTimestamp = ConvertHelper.unixTimestamp;

  // public service: Web3Service
  constructor(private service: BookService) {}

  ngOnInit() {
    // this.fetchEvents();
    this.gridItems$ = this.service.getBooks().pipe(
      catchError(error => {
        return of(null);
      })
    );

    for (const key in this.gridItems$) {
      if (this.gridItems$.hasOwnProperty(key)) {
        const element = this.gridItems$[key];
        console.log(element);
      }
    }
  }

  // async fetchEvents() {
  //   this.eventsModel = await this.service.getPastEvents(24);

  //   // Config pagination instance
  //   if (this.eventsModel) {
  //     this.config.totalItems = this.eventsModel.length;
  //   }
  // }

  setStatus() {
    this.noSearchResult = !this.noSearchResult;
    // this.fetchEvents();
  }
}
