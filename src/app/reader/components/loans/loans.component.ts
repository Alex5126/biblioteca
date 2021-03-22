
import { Component, OnInit } from '@angular/core';
import { LoanHistory } from 'src/app/models/loan-history';
import {LoanHistoryService} from 'src/app/services/loan-history.service'
import { AuthService } from 'src/app/services/auth.service';
import { RespLogin } from 'src/app/models/login';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  public displayedColumns:string[] = [ 'id', 'user', 'book', 'loan_date', 'update_date', 'status'];
  public loanHistory:LoanHistory[] = [];

  constructor(private loanAppService:LoanHistoryService,   public authService:AuthService) { }

 
  ngOnInit(): void {
    setTimeout(() => {
      this.getLoanHistory();
    }, 200)
  }


  getLoanHistory(){
    let user:RespLogin = JSON.parse(localStorage.getItem('user')||'');

    this.loanAppService.getLoanHistoryUser(user.user.id).subscribe(data => {
      this.loanHistory = data;
    }, e => {
      console.log(e.error.message);
      alert("Error, No se pudo obtener la lista de prestamos");
      this.authService.logout;
    });
  
}
}