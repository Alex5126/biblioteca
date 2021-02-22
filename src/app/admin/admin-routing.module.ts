import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', redirectTo:'users', pathMatch: 'full'},
  {path:'users', component:UsersComponent},
  {path:'books', component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class AdminRoutingModule { }