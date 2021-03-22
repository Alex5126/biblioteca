import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalEditUserReaderComponent } from '../modal-edit-user-reader/modal-edit-user-reader.component';
import { RespLogin } from 'src/app/models/login';
import { UsersComponent } from 'src/app/admin/components/users/users.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  
  public users:User ={};
  
  constructor(private userService:UserService, public modalUser: MatDialog,  public authService:AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getUsers();
    }, 200)
  }

  getUsers() {
    let user:RespLogin = JSON.parse(localStorage.getItem('user')||'');
    this.userService.getUserById(user.user.id).subscribe(data => {
      this.users = data;
    }, e => {
      console.log(e.error.message);
      alert("Error, No se pudo obtener la informacion");
      this.authService.logout();
    });

  }

  openModal(user?:User){
    const dialogRef = this.modalUser.open(ModalEditUserReaderComponent, {
      height: '650px',
      width: '500px',
      disableClose: true,
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
        this.getUsers();
      console.log(result);
    });
  }


}
