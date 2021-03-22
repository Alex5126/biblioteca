
import { Component, OnInit } from '@angular/core';
import { LoanHistory } from 'src/app/models/loan-history';
import {LoanHistoryService} from 'src/app/services/loan-history.service'
import {LoanApplicationsService} from 'src/app/services/loan-applications.service'
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.component.html',
  styleUrls: ['./borrowed.component.scss']
})
export class BorrowedComponent implements OnInit {

 
  public displayedColumns:string[] = [ 'id', 'user', 'book', 'loan_date', 'update_date', 'status', 'opcs'];
  public loanHistory:LoanHistory[] = [];
  public value:LoanHistory = {}
  public fecha:Date = new Date();

  constructor(private loanHisService:LoanHistoryService, private loanAppService:LoanApplicationsService, public authService:AuthService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getLoanHistory();
    }, 200)
  }


  getLoanHistory(){
    this.loanHisService.getLoanHistory().subscribe(data => {
      this.loanHistory = data;
    }, e => {
      console.log(e.error.message);
      alert("Error, No se puede obtener la lista de prestamos");
      this.authService.logout;
    });
  }

  updateLoanHistory(status:string, element:LoanHistory){
    this.value.id = element.id;
    this.value.id_book = element.id_book;
    this.value.id_user = element.id_user;
    this.value.loan_date = element.loan_date;
    this.value.status = status;
    this.value.update_date = this.fecha;

    this.loanHisService.updateLoanHistoryUser(this.value).subscribe(data => {
      console.log(data);
      setTimeout(() => {
        this.getLoanHistory();
      }, 200)
      alert("Actualizacion realizada");
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });

  }

}
