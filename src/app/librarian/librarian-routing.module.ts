import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianComponent } from './components/librarian/librarian.component';

const routes: Routes = [
    {path:'', component:LibrarianComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class LibrarianRoutingModule { }