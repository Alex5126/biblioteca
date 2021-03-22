import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
  
  getUserById(id:any):Observable<User>{
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
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
