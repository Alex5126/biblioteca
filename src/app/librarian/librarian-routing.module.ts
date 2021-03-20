import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './components/request/request.component';
import { BorrowedBooksComponent } from './components/borrowed-books/borrowed-books.component';

const routes: Routes = [
    { path: '', redirectTo: 'request', pathMatch: 'full' },
    { path: 'request', component: RequestComponent },
    { path: 'borrowed-books', component: BorrowedBooksComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class LibrarianRoutingModule { }