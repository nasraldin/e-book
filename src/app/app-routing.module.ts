import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { AboutTaskComponent } from './components/about-task/about-task.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
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
