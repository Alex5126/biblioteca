import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public user:User = {
    address:'',
    email:'',
    last_name:'',
    name:'',
    type:''
  };

  constructor() {
    this.getUser();
  }

  getUser(){
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user')||'').user;
    }
  }

}
