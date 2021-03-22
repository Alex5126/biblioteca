import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-modal-edit-user-reader',
  templateUrl: './modal-edit-user-reader.component.html',
  styleUrls: ['./modal-edit-user-reader.component.scss']
})
export class ModalEditUserReaderComponent implements OnInit {

  public formUser: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalEditUserReaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, 
    private formBuilder: FormBuilder, 
    private userService:UserService) {
      
    this.formUser = this.formBuilder.group({
      id: [0],
      name: [null, Validators.required],
      password: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.required],
      address: [null, Validators.required]
    });

  }
  ngOnInit(): void {
    if(this.data){
      this.formUser.patchValue(this.data);
      this.formUser.controls['password'].setValue(null);
    }
  }

  clean(){
    this.formUser.reset();
    console.log(this.formUser.value);
    
  }

  close(){
    this.dialogRef.close({message:'cerrado'})
  }

  
  sendUser() {
    let id = this.formUser.controls['id'].value;
    if(!this.formUser.valid) {
      alert('Datos no validos, verifique que esten todos');
    console.log(id);
    }else{
      if(id != null && id != 0){
        this.updateUser();
      }
   }

  }


  updateUser(){

    this.userService.updateUser(this.formUser.value).subscribe(data => {
      console.log(data);
      alert("Actualizacion realizada");
      this.dialogRef.close();
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
  }


}
