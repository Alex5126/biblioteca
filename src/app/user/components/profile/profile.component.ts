import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private authService:AuthService, public modalUser: MatDialog) { }

  private iduser = this.authService.user.user.id;
  public users:any;
  public name:any;
  public last_name:any;
  public email:any;
  public type:any;
  public address:any;
  public user: User[] = [];

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.userService.getUsersID(this.iduser).subscribe(data => {
      this.users = data;
      //console.log(this.users)
      this.name = this.users.name
      this.last_name = this.users.last_name
      this.email = this.users.email
      this.type = this.users.type
      this.address = this.users.address
    }, e => {
      console.log(e.error.message);
      alert(e.error.message);
    });
    
  } 

  openModal(user?: User) {
    const dialogRef = this.modalUser.open(ProfileModalComponent, {
      height: '650px',
      width: '500px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUser();
      console.log(result);
    });
  }
}
