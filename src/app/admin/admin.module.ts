import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BooksComponent } from './components/books/books.component';
import { UsersComponent } from './components/users/users.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ModalUserComponent } from './components/modal-user/modal-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalBookComponent } from './components/modal-book/modal-book.component';


@NgModule({
  declarations: [
    UsersComponent,
    BooksComponent,
    ModalUserComponent,
    ModalBookComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents:[
    ModalUserComponent,
    ModalBookComponent
  ]
})
export class AdminModule { }
