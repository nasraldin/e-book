import { Book } from '../../models/book.model';

export interface IBookState {
  books: Book[];
  selectedBook: Book;
}

export const initialBookState: IBookState = {
  books: null,
  selectedBook: null
};
