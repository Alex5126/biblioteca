import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { BooksComponent } from './components/books/books.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoansComponent } from './components/loans/loans.component';
import { FormsModule } from '@angular/forms';
import { DetailBookComponent } from './components/detail-book/detail-book.component';



@NgModule({
  declarations: [
    BooksComponent,
    ProfileComponent,
    LoansComponent,
    DetailBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
