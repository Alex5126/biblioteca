import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BorrowedComponent} from './components/borrowed/borrowed.component';
import {RequestsComponent} from './components/requests/requests.component'
import {LibrarianGuard} from 'src/app/guards/librarian.guard';

const routes: Routes = [
  { path: '', redirectTo: 'request', pathMatch: 'full' },
  { path: 'borrowed', component: BorrowedComponent, canActivate:[LibrarianGuard]},
  { path: 'request', component:  RequestsComponent, canActivate:[LibrarianGuard]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrarianRoutingModule { }
