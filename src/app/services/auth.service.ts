import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { UserToken } from '../models/user';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private jwtHelper: JwtHelperService, private router:Router, private util:UtilsService) { }

  login(obj:Login):Observable<UserToken>{
    return this.http.post<UserToken>(`${environment.apiUrl}/login`,obj);
  }

  logout(){
    localStorage.removeItem('user');
    this.util.user = {
      address:'',
      email:'',
      last_name:'',
      name:'',
      type:''
    };
    this.router.navigate(['']);
  }

  isAuthenticate(): boolean{
    if(localStorage.getItem('user')){
      const user:UserToken = JSON.parse(localStorage.getItem('user')||'');
      return !this.jwtHelper.isTokenExpired(user.token);
    }else return false;
    
  }
}
