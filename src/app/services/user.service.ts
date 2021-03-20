import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../mocks/user-mock';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicResponse } from '../models/general';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    //return of(USERS)
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getUsersID(id:any):Observable<User[]>{
    //return of(USERS)
    return this.http.get<User[]>(`${environment.apiUrl}/users/${id}`);
  }
  
  deleteUser(id:any):Observable<BasicResponse>{
    return this.http.delete<BasicResponse>(`${environment.apiUrl}/users/${id}`);
  }

  addUser(user:User):Observable<BasicResponse>{
    return this.http.post<BasicResponse>(`${environment.apiUrl}/users`,user);
  }

  updateUser(user:User){
    return this.http.put<BasicResponse>(`${environment.apiUrl}/users/${user.id}`,user);
  }

}
