import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ModalUserComponent } from '../modal-user/modal-user.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'last_name', 'email', 'address', 'type', 'opcs'];
  public users: User[] = [];

  constructor(private userService: UserService, public modalUser: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, e => {
      console.log(e.error.message);
      alert(e.error.message);
    });

  }

  openModal(user?: User) {
    const dialogRef = this.modalUser.open(ModalUserComponent, {
      height: '650px',
      width: '500px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
      console.log(result);
    });
  }

  deleteUser(user: User) {
    if (!confirm(`Desea eliminar a ${user.name} ?`)) return;

    this.userService.deleteUser(user.id).subscribe(resp => {
      alert(resp.message);
      this.getUsers();
    });
  }

}
