import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutTaskComponent } from './components/about-task/about-task.component';
import { BookListContainerComponent } from './containers/book-list/book-list.component';
import { BookDetailsContainerComponent } from './containers/book-details/book-details.component';

const routes: Routes = [
  { path: '', component: BookListContainerComponent },
  { path: 'details/:id', component: BookDetailsContainerComponent },
  { path: 'about-task', component: AboutTaskComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: false
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
