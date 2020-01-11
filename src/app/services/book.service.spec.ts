import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { BookService } from './book.service';

const mockBooks = {
  books: [
    {
      _id: 1,
      isbn: '9780136083238',
      title: 'Clean Code',
      author: 'Robert C. Martin',
      description: 'Clean Code is divided into three parts...',
      issued: '1217548800',
      publisher: 'Prentice Hall',
      rating: 5,
      topic: 'Coding Practices',
      cover: 'CleanCode.jpg'
    }
  ]
};

describe('Service: BookService', () => {
  let httpMock: HttpTestingController;
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });
  });

  beforeEach(inject(
    [BookService, HttpTestingController],
    (service$, httpMock$) => {
      service = service$;
      httpMock = httpMock$;
    }
  ));

  it('getBooks: should return a book list', () => {
    const expected = [
      {
        _id: 1,
        isbn: '9780136083238',
        title: 'Clean Code',
        author: 'Robert C. Martin',
        description: 'Clean Code is divided into three parts...',
        issued: '1217548800',
        publisher: 'Prentice Hall',
        rating: 5,
        topic: 'Coding Practices',
        cover: 'CleanCode.jpg'
      }
    ];
    service.getBooks().subscribe(books => {
      expect(books).toEqual(expect.arrayContaining(expected));
      expect(books[0][0]).toBe('books');
    });

    const req = httpMock.expectOne('/api/list');

    req.flush(mockBooks);
    httpMock.verify();
  });

  it('getBookDetails: should return the selected book', () => {
    service.getBookDetails(1).subscribe(book => {
      expect('/api/details').toBeCalledWith('/api/details');
      expect(book._id).toBe(1);
    });
  });
});
