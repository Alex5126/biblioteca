import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss']
})
export class ProfileModalComponent implements OnInit {

  public formUser: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProfileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, 
    private formBuilder: FormBuilder, 
    private userService:UserService) {
      
    this.formUser = this.formBuilder.group({
      id: [0],
      name: [null, Validators.required],
      password: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
      type: [null, Validators.required],
      address: [null, Validators.required]
    });

  }
  public contra:any
  public id: any
  public message:any
  public spinner = false
  ngOnInit(): void {
    if(this.data){
      this.formUser.patchValue(this.data);
      this.contra=this.formUser.controls['password'].value
      this.formUser.controls['password'].setValue(null);
    }
    this.id = this.formUser.controls['id'].value;
    if(this.id != null && this.id != 0){
      this.message = true
    }
  }

  close(){
    this.dialogRef.close({message:'cerrado'})
  }

  sendUser() {
    if(!this.formUser.valid){
      alert('datos no validos');
    } else {
      this.spinner = true;
      this.updateUser();
    }
    //console.log(id);
  }

  updateUser(){
    this.userService.updateUser(this.formUser.value).subscribe(data => {
      console.log(data);
      alert(data.message);
      this.dialogRef.close('Usuario actualizado');
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
  }

}
