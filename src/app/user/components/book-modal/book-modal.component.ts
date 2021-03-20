import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import { AuthService } from 'src/app/services/auth.service';
import { LoanApplication } from 'src/app/models/loanApplications';
import { LoanApplicationsService } from 'src/app/services/loan-applications.service';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss']
})
export class BookModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book,
    private authService:AuthService,
    private loanApplicationsService:LoanApplicationsService
  ) { }

  public bookid: any;
  public iduser: any;
  public loanApplication:LoanApplication[] = [];

  ngOnInit(): void {
    this.bookid =this.data;
    console.log(this.bookid)
    this.iduser = this.authService.user.user.id
    console.log(this.iduser) 
  }

  close(){
    this.dialogRef.close({message:'cerrado'})
  }

  reserve(){
    console.log("reservado")
  }

}
