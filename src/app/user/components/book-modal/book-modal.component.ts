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
  private iduser = this.authService.user.user.id;

  ngOnInit(): void {
    this.bookid =this.data;
    console.log(this.bookid)
  }

  close(){
    this.dialogRef.close({message:'cerrado'})
  }

  reserve(){
    const datos: LoanApplication = {
      id_user : this.iduser,
      id_book : this.bookid.id,
      status : "EN PROCESO"
    }
    console.log(datos)
    this.loanApplicationsService.addLoanApp(datos).subscribe(data => {
      console.log(data);
      alert(data.message);
      this.dialogRef.close('Prestamo de libro en proceso');
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
  }

}
