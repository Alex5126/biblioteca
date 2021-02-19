import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin.component';
import { AadminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AadminRoutingModule
  ]
})
export class AdminModule { }
