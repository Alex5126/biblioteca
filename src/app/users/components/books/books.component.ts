import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';
import { utils } from 'protractor';
import { Book } from 'src/app/models/book';
import { LoanApplication } from 'src/app/models/loanApplication';
import { BookService } from 'src/app/services/book.service';
import { LoanApplicationService } from 'src/app/services/loan-application.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books:Book[] = [];

  constructor(
    private bookService:BookService,
    private loanAppService:LoanApplicationService, 
    private util:UtilsService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }

  more(idBook:any){
    this.route.navigate(['users/books/'+idBook]);
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
