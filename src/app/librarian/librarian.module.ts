import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrarianComponent } from './components/librarian/librarian.component';
import { LibrarianRoutingModule } from './librarian-routing.module';



@NgModule({
  declarations: [
    LibrarianComponent
  ],
  imports: [
    CommonModule,
    LibrarianRoutingModule
  ]
})
export class LibrarianModule { }
