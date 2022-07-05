import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogTest } from './Dialogtest';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  public load: boolean = true;
  public books: Book[] = [];
  public formBook: FormGroup;
  public editBook: boolean = false;

  constructor(private bookService: BookService, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.formBook = this.formBuilder.group({
      id:[0],
      code: [null, Validators.required],
      title: [null, Validators.required],
      author: [null, Validators.required],
      edition: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required]
    });
   }
 
    openDialog(): void {
      const dialogRef = this.dialog.open(DialogTest);
  
    }
  
  ngOnInit(): void {
    this.getBooks();
  }

  edit(book:Book){
    this.formBook.patchValue(book);
    console.log(this.formBook.value);
    
    this.editBook = true;
  }

  clear(){
    this.formBook.reset();
  }

  sendData(){
    if(this.formBook.controls['id'].value){
      this.updateBook();
    }else{
      this.addBook();
    }
  }

  getBooks() {
    this.load = true;
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
      this.load = false;
    }, error => {
      console.log(error)
      this.load = false;
    });
  }

  addBook(){
    if(!this.formBook.valid){
      alert('favor de revisar los datos');
      return;
    }
    this.bookService.addBook(this.formBook.value).subscribe(data =>{
      console.log(data);
      alert('Libro agregado correctamente');
      this.clear();
      this.editBook = false;
      this.getBooks();
    }, error => {
      console.log(error);
      alert(error);
    });
  }

  updateBook(){
    this.bookService.updateBook(this.formBook.value).subscribe(data => {
      console.log(data);
      alert('Libro modificado correctamente');
      this.editBook = false;
      this.clear();
      this.getBooks();
    }, error => {
      console.log(error);
      alert(error);
    });
  }

  deleteBook(id: any) {
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data);
      this.clear();
      this.getBooks();
    }, error => {
      console.log(error)
      this.load = false;
    });
  }

}
