import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../models/book.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;

  constructor(private location: Location) {}

  ngOnInit() {}

  back() {
    this.location.back();
  }
}
