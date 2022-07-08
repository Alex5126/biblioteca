import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent{

  public load: boolean = true;
  public books: Book[] = [];
  public formBook: FormGroup;
  public editBook: boolean = false;

  constructor(private bookService: BookService, private formBuilder: FormBuilder, 
    public dialog: MatDialog, public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    this.formBook = this.formBuilder.group({
      id: [0],
      code: [null, Validators.required],
      title: [null, Validators.required],
      author: [null, Validators.required],
      edition: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    if(this.data){
      this.formBook.patchValue(this.data);
    }
  }


  edit(book: Book) {
    this.formBook.patchValue(book);
    console.log(this.formBook.value);

    this.editBook = true;
  }

  clear() {
    this.formBook.reset();
  }

  sendData() {
    if (this.formBook.controls['id'].value) {
      this.updateBook();
    } else {
      this.addBook();
    }
  }

  addBook() {
    if (!this.formBook.valid) {
      alert('favor de revisar los datos');
      return;
    }
    this.bookService.addBook(this.formBook.value).subscribe(data => {
      console.log(data);
      alert('Libro agregado correctamente');
      this.clear();
      this.editBook = false;
      this.dialogRef.close();
    }, error => {
      console.log(error);
      alert(error);
    });
  }

  updateBook() {
    this.bookService.updateBook(this.formBook.value).subscribe(data => {
      console.log(data);
      alert('Libro modificado correctamente');
      this.editBook = false;
      this.clear();
    }, error => {
      console.log(error);
      alert(error);
    });
  }

  deleteBook(id: any) {
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data);
      this.clear();
    }, error => {
      console.log(error)
      this.load = false;
    });
  }

}