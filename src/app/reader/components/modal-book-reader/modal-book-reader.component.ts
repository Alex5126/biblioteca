
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import {LoanApplicationsService} from 'src/app/services/loan-applications.service'
import { RespLogin } from 'src/app/models/login';
import { LoanApplications } from 'src/app/models/loan-applications';


@Component({
  selector: 'app-modal-book-reader',
  templateUrl: './modal-book-reader.component.html',
  styleUrls: ['./modal-book-reader.component.scss']
})
export class ModalBookReaderComponent implements OnInit {

  public loanAppModel:LoanApplications = {}; 

  constructor(
    public dialogRef: MatDialogRef<ModalBookReaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book, 
    private loanAppService:LoanApplicationsService) {
      
  }
  ngOnInit(): void {
   
  }


  close(){
    this.dialogRef.close({message:'cerrado'})
  }


  addLoanApp(){
    let user:RespLogin = JSON.parse(localStorage.getItem('user')||'');
    this.loanAppModel.id_book = this.data.id;
    this.loanAppModel.id_user = user.user.id;

    this.loanAppService.addLoanApplications(this.loanAppModel).subscribe(data => {
      console.log(data);
      alert("Solicitud enviada");
      this.dialogRef.close();
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
  }



}
