import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianRoutingModule } from './librarian-routing.module';
import { LoanApplicationsComponent } from './components/loan-applications/loan-applications.component';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';



@NgModule({
  declarations: [
    LoanApplicationsComponent,
    BorrowedBooksComponent
  ],
  imports: [
    CommonModule,
    LibrarianRoutingModule
  ]
})
export class LibrarianModule { }
