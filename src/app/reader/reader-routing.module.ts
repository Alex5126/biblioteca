import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import {LoansComponent} from './components/loans/loans.component';
import {ProfileComponent} from './components/profile/profile.component'
import {ReaderGuard} from 'src/app/guards/reader.guard';

const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'book', component: BookComponent, canActivate:[ReaderGuard]},
  { path: 'loans', component:  LoansComponent, canActivate:[ReaderGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[ReaderGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderRoutingModule { }
