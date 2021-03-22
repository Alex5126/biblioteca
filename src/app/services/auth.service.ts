import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, RespLogin } from '../models/login';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: RespLogin;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {

    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user') || '');
    } else {
      this.user = {
        token: '',
        user: { id: 0, name: '', type: '' }
      }
    }
  }

  login(log: Login): Observable<RespLogin> {
    return this.http.post<RespLogin>(`${environment.apiUrl}/login`, log);
  }

  logout() {
    localStorage.removeItem('user');
    this.user = {
      token: '',
      user: { id: 0, name: '', type: '' }
    }
    this.router.navigate(['login']);
  }

  isLogged():boolean{
    if(localStorage.getItem('user')){
      let usr:RespLogin = JSON.parse(localStorage.getItem('user') || '');
      return !this.jwtHelper.isTokenExpired(usr.token);
    }else
      return false;
  }

  returnUser(){
    let usr:RespLogin = JSON.parse(localStorage.getItem('user') || '');
    switch (usr.user.type) {
      case 'ADMIN':
        this.router.navigate(['admin']);
        break;

      case 'LIBRARIAN':
        this.router.navigate(['librarian']);
        break;
  
      case 'LECTOR':
        this.router.navigate(['reader']);
        break;       
        
      default: 
      this.logout();
      this.router.navigate(['login']);
        break;
    }

  
  }

}
