import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { BookModalComponent } from '../book-modal/book-modal.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books:Book[] = [];

  constructor(private bookService:BookService, public bookModal: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      console.log(this.books)
    }, error => {
      console.error(error);
      alert('No se pudieron obtener los libros');
    });
  }

  openModal (book?: Book) {
    console.log(book)
    const dialogRef = this.bookModal.open(BookModalComponent, {
      height: '550px',
      width: '800px',
      data: book
    });
  }

  public idShow:number = 0;

  mostrar(id:number){
    this.idShow = id;
  }

}
