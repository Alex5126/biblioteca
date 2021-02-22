import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public load: boolean = true;
  public users: User[] = [];
  public formUser: FormGroup;
  public editUser: boolean = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder,) {
    this.formUser = this.formBuilder.group({
      id:[0],
      name: [null, Validators.required],
      password: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
      type: [null, Validators.required],
      address: [null, Validators.required]
    });
   }

  ngOnInit(): void {
    this.getUsers();
  }

  edit(user:User){
    this.formUser.patchValue(user);
    this.formUser.controls['password'].setValue('');
    console.log(this.formUser.value);
    
    this.editUser = true;
  }

  clear(){
    this.formUser.reset();
    console.log(this.formUser.value);
    
  }

  sendData(){
    if(this.formUser.controls['id'].value){
      this.updateUser();
    }else{
      this.addUser();
    }
  }

  getUsers() {
    this.load = true;
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      this.load = false;
    }, error => {
      console.log(error)
      this.load = false;
    });
  }

  addUser(){
    if(!this.formUser.valid){
      alert('favor de revisar los datos');
      return;
    }
    this.userService.addUser(this.formUser.value).subscribe(data =>{
      console.log(data);
      alert('usuario agregado correctamente');
      this.getUsers();
    }, error => {
      console.log(error);
      alert(error);
    });
  }

  updateUser(){
    this.userService.editUser(this.formUser.value).subscribe(data => {
      console.log(data);
      alert('usuario modificado correctamente');
      this.editUser = false;
      this.getUsers();
    }, error => {
      console.log(error);
      alert(error);
    });
  }

  deleteUser(id: any) {
    this.userService.delteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    }, error => {
      console.log(error)
      this.load = false;
    });
  }

}
