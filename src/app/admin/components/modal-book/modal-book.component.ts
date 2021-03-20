import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-modal-book',
  templateUrl: './modal-book.component.html',
  styleUrls: ['./modal-book.component.scss']
})
export class ModalBookComponent implements OnInit {

  public formBook: FormGroup;
  public spinner = false;

  constructor(
    public dialogRef: MatDialogRef<ModalBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book, 
    private formBuilder: FormBuilder, 
    private bookService:BookService) {
      
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

  clean(){
    this.formBook.reset();
    console.log(this.formBook.value);
  }

  close(){
    this.dialogRef.close({message:'cerrado'})
  }

  sendBook() {
    let id = this.formBook.controls['id'].value;
    if(!this.formBook.valid) 
      alert('datos no validos');
    else {
      this.spinner = true;
      if(id != null && id != 0){
        this.updateBook();
      }else{
        this.addBook();
      }
    }
    //console.log(id);
  

  }

  addBook(){
    this.bookService.addBook(this.formBook.value).subscribe(data => {
      console.log(data);
      alert(data.message);
      this.dialogRef.close('Usuario creado');
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
  }

  updateBook(){
    this.bookService.updateBook(this.formBook.value).subscribe(data => {
      console.log(data);
      alert(data.message);
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
  }

}
