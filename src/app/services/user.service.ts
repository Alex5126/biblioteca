import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicResponse } from '../models/response';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  addUser(user:User):Observable<BasicResponse>{
    return this.http.post<BasicResponse>(`${environment.apiUrl}/users`,user);
  }

  editUser(user:User):Observable<BasicResponse>{
    return this.http.put<BasicResponse>(`${environment.apiUrl}/users/${user.id}`,user);
  }

  delteUser(id:number):Observable<BasicResponse>{
    return this.http.delete<BasicResponse>(`${environment.apiUrl}/users/${id}`);
  }
}
