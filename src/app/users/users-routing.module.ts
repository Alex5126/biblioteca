import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { LoansComponent } from './components/loans/loans.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo:'books', pathMatch: 'full'},
  {path:'books', component:BooksComponent},
  {path:'books/:id', component:DetailBookComponent},
  {path:'loans', component: LoansComponent},
  {path:'profile', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class UsersRoutingModule { }