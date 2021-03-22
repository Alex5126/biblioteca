import { Component, OnInit } from '@angular/core';
import {Book} from 'src/app/models/book'
import { BookService } from 'src/app/services/book.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalBookReaderComponent } from '../modal-book-reader/modal-book-reader.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


  public books:Book[] = [];


  constructor(private bookService:BookService, public modalBooks: MatDialog, public authService:AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getBooks()
    }, 200)

  }

  getBooks(){
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    }, error => {
      console.error(error);
      alert('No se pudieron obtener los libros');
    });
  }

  
openModal(book?:Book){
  const dialogRef = this.modalBooks.open(ModalBookReaderComponent, {
    height: '550px',
    width: '1000px',
    disableClose: true,
    data: book
  });
  
  dialogRef.afterClosed().subscribe(result => {
      this.getBooks();
    console.log(result);
  });
}

}

