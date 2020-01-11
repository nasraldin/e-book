import { BookService } from './../../../services/book.service';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookListComponent } from './book-list.component';
import {
  NO_ERRORS_SCHEMA,
  Component,
  EventEmitter,
  inject
} from '@angular/core';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

export function MockComponent(
  selector: string,
  options: Component = {}
): Component {
  const metadata: Component = {
    selector,
    template: options.template || '',
    inputs: options.inputs || [],
    outputs: options.outputs || [],
    exportAs: options.exportAs || ''
  };

  class Mock {
    constructor() {
      metadata.outputs.forEach(method => {
        this[method] = new EventEmitter<any>();
      });
    }
  }

  return Component(metadata)(Mock as any);
}

describe('BookListComponent', () => {
  // let httpMock: HttpTestingController;
  // let service: BookService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [BookListComponent, MockComponent('app-book-card')],
      providers: [BookService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  // beforeEach(inject(
  //   [BookService, HttpTestingController],
  //   (service$, httpMock$) => {
  //     service = service$;
  //     httpMock = httpMock$;
  //   }
  // ));

  it('should create the BookList', () => {
    const fixture = TestBed.createComponent(BookListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
