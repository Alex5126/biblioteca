import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public user:User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user')||'').user;
  }

}
