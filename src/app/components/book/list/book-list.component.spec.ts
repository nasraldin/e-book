import { BookService } from './../../../services/book.service';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookListComponent } from './book-list.component';
import { NO_ERRORS_SCHEMA, Pipe } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

export function mockPipe(options: Pipe): Pipe {
  const metadata: Pipe = {
    name: options.name
  };

  return Pipe(metadata)(class MockPipe {}) as any;
}

describe('BookListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [
        BookListComponent,
        mockPipe({ name: 'paginate' }),
        mockPipe({ name: 'filter' })
      ],
      providers: [BookService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the BookList', () => {
    const fixture = TestBed.createComponent(BookListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
