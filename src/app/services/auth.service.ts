import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { UserToken } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private jwtHelper: JwtHelperService, private router:Router) { }

  login(obj:Login):Observable<UserToken>{
    return this.http.post<UserToken>(`${environment.apiUrl}/login`,obj);
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  isAuthenticate(): boolean{
    const user:UserToken = JSON.parse(localStorage.getItem('user')||'');
    return !this.jwtHelper.isTokenExpired(user.token);
  }
}
