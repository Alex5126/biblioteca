import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';
import { LoanApplicationsComponent } from './components/loan-applications/loan-applications.component';

const routes: Routes = [
    {path: '', redirectTo:'request', pathMatch: 'full'},
    {path:'request', component:LoanApplicationsComponent},
    {path:'borrowed-books', component: BorrowedBooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class LibrarianRoutingModule { }