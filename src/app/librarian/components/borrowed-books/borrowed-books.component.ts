import { Component, OnInit } from '@angular/core';
import { LoanHistory } from 'src/app/models/loanHistory';
import { LoanHistoryService } from 'src/app/services/loan-history.service';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.scss']
})
export class BorrowedBooksComponent implements OnInit {

  public displayedColumns:string[] = [ 'id', 'user', 'book','loan_date', 'update_date', 'status', 'opcs'];
  public loanHistory:LoanHistory[] = [];

  constructor(private loanHistoryService:LoanHistoryService) { }

  ngOnInit(): void {
    this.getLoanHistory();
  }

  getLoanHistory() {
    this.loanHistoryService.getLoanHist().subscribe(data => {
      this.loanHistory = data;
      console.log(this.loanHistory)
      if(this.loanHistory.length === 0)
        alert("No se ha aceptado ninguna solicitud de libros aún")
    }, e => {
      console.log(e.error.message);
      alert(e.error.message);
    });
  }

  deliver(loanHistory:LoanHistory){
    const dato:LoanHistory = {
      id : loanHistory.id,
      id_book : loanHistory.id_book,
      id_user : loanHistory.id_user,
      status : "ENTREGADO"
    }
    this.loanHistoryService.updateLoanHist(dato).subscribe(data => {
      console.log(data);
      alert(data.message);
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
    this.getLoanHistory()
  }

}
