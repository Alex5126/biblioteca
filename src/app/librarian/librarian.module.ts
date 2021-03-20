import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianRoutingModule } from './librarian-routing.module';
import { RequestComponent } from './components/request/request.component';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RequestComponent,
        BorrowedBooksComponent
    ],
    imports: [
        CommonModule,
        LibrarianRoutingModule,
        MatProgressSpinnerModule,
        MatTableModule,
    ],
    entryComponents:[
    ]
})
export class LibrarianModule { }
