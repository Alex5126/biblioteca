import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderRoutingModule } from './reader-routing.module';
import { LoansComponent } from './components/loans/loans.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookComponent } from './components/book/book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModalBookReaderComponent } from './components/modal-book-reader/modal-book-reader.component';
import { ModalEditUserReaderComponent } from './components/modal-edit-user-reader/modal-edit-user-reader.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    BookComponent,
    LoansComponent, 
    ProfileComponent,
    ModalBookReaderComponent,
    ModalEditUserReaderComponent
    ],

  imports: [
    CommonModule,
    ReaderRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents:[
    ModalBookReaderComponent,
    ModalEditUserReaderComponent
  ]
})
export class ReaderModule { }
