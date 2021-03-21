import { Component, OnInit } from '@angular/core';
import { LoanHistory } from 'src/app/models/loanHistory';
import { LoanHistoryService } from 'src/app/services/loan-history.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  private iduser = this.authService.user.user.id;
  public displayedColumns:string[] = [ 'id', 'user', 'book','loan_date', 'update_date', 'status'];
  public loanHistory:LoanHistory[] = [];

  constructor(private loanHistoryService:LoanHistoryService,private authService:AuthService) { }

  ngOnInit(): void {
    this.getLoanHistory();
  }

  getLoanHistory() {
    console.log(this.iduser)
    this.loanHistoryService.getLoanHistID(this.iduser).subscribe(data => {
      this.loanHistory = data;
      console.log(this.loanHistory)
      if(this.loanHistory.length === 0)
        alert("No ha pedido prestamo de ningún libro aún o su(s) solicitud(es) no ha(n) sido aceptada(s)")
    }, e => {
      console.log(e.error.message);
      alert(e.error.message);
    });
  }

}
