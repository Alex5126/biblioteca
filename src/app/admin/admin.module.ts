import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './components/users/users.component';
import { BooksComponent} from './components/books/books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';



@NgModule({
  declarations: [
    UsersComponent,
    BooksComponent,
    FormDialogComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatDialogModule,

  ]
})
export class AdminModule { }
