import { Component, OnInit } from '@angular/core';
import { LoanHistory } from 'src/app/models/loanHistory';
import { LoanHistoryService } from 'src/app/services/loan-history.service';


@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.scss']
})
export class BorrowedBooksComponent implements OnInit {

  public load: boolean = true;
  public loanHists: LoanHistory[] = [];
  public editLoanHist: boolean = false;

  constructor(private loanHistService: LoanHistoryService,) {
  }


  ngOnInit(): void {
    this.getLoanHists();
  }

  getLoanHists() {
    this.load = true;
    this.loanHistService.getAllLoanHist().subscribe(data => {      
      this.loanHists = data;
      this.load = false;
    }, error => {
      console.log(error);
      this.load = false;
    });
  }


  updateLoanHist(loanHist:LoanHistory, status:string){
    let resp:LoanHistory = {
      id:loanHist.id,
      id_book:loanHist.id_book,
      id_user:loanHist.id_user,
      status:status,
    }
    this.loanHistService.updateLoanHist(resp).subscribe(data => {
      console.log(data);
      alert('Libro Entregado');
      this.editLoanHist = false;
      this.getLoanHists();
    }, error => {
      console.log(error);
      alert(error);
    });
  }


}
