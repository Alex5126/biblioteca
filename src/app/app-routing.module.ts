import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'menu', pathMatch: 'full'},
  {path:'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'librarian', loadChildren: () => import('./librarian/librarian.module').then(m => m.LibrarianModule)},
  {path:'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path:'**', redirectTo:'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
