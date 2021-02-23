import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { LoanApplication } from 'src/app/models/loanApplication';
import { BookService } from 'src/app/services/book.service';
import { LoanApplicationService } from 'src/app/services/loan-application.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  public book:Book = {
    author:'',
    code:'',
    description:'',
    edition:'',
    image:'',
    title:''
  }

  private idBook;

  constructor(
    private bookService:BookService,
    private loanAppService:LoanApplicationService, 
    private util:UtilsService,
    private route:ActivatedRoute
    ) {
    this.idBook = route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.bookService.getBookById(this.idBook).subscribe(data => {
      this.book = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  apply(book:Book){
    let req:LoanApplication = {
      id_user:this.util.user.id || 0,
      id_book:book.id || 0,
      status:'EN PROCESO'
    };

    this.loanAppService.addLoanApp(req).subscribe(data => {
      alert('Solicitud Enviada Correctamente');
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
