import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './services/app-config.service';
import { HeaderComponent } from './components/layout/header/header.component';
import { FilterPipe } from './pipe/string-filter.pipe';
import { AboutTaskComponent } from './components/about-task/about-task.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './app-error.handler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookService } from './services/book.service';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BookEffects } from './store/effects/book.effects';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { BookListComponent } from './components/book/list/book-list.component';
import { BookDetailsComponent } from './components/book/details/book-details.component';
import { BookListContainerComponent } from './containers/book-list/book-list.component';
import { BookDetailsContainerComponent } from './containers/book-details/book-details.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HeaderComponent,
    SidebarComponent,
    AboutTaskComponent,
    BookListComponent,
    BookDetailsComponent,
    BookListContainerComponent,
    BookDetailsContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    NgxPaginationModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BookEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    OrderModule
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigService],
      multi: true
    },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// The entry point of app initializations
export function initializeApp(appConfig: AppConfigService) {
  return () => appConfig.load();
}
