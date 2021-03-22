import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TecnologicosComponent } from './tecnologicos/tecnologicos.component';

//routes 1
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'reader', loadChildren: () => import('./reader/reader.module').then(m => m.ReaderModule), canActivate:[AuthGuard]  }, 
  { path: 'librarian', loadChildren: () => import('./librarian/librarian.module').then(m => m.LibrarianModule), canActivate:[AuthGuard]  },
  { path: 'tecnologicos', component: TecnologicosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[AuthGuard] },
  { path: '**' , redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
