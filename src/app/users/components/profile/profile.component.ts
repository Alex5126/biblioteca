import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user:User = {
    address:'',
    email:'',
    last_name:'',
    name:'',
    type:'',
  };

  public isEdit: boolean = false;

  constructor(private userService:UserService, private util:UtilsService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.userService.getUserById(this.util.user.id || 0).subscribe(data => {
      this.user = data;
      this.user.password = '********'
    });
  }

  updateUser(){
    this.userService.editUser(this.user).subscribe(data => {
      alert('Usuario Actualizado');
      console.log(data);
    });
  }
}
