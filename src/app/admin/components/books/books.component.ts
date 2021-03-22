import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { ModalBookComponent } from '../modal-book/modal-book.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public displayedColumns:string[] = [ 'image', 'code', 'title', 'author', 'edition', 'description', 'opcs'];
  public books:Book[] = [];
  public imgTemp:any;
  public imgToUpload:any;

 
  constructor(private bookService:BookService, public modalBook: MatDialog, public authService:AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getBooks();
     }, 200)
  }

  getBooks(){
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    }, error => {
      console.error(error);
      alert('No se pudieron obtener los libros');
      this.authService.logout();
    });
  }


  openModal(book?:Book){
    const dialogRef = this.modalBook.open(ModalBookComponent, {
      height: '550px',
      width: '800px',
      disableClose: true,
      data: book
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBooks();
      console.log(result);
    });
  }

  deleteBook(book:Book){
    if(!confirm(`Desea eliminar ${book.title}?`)) return;

    this.bookService.deleteBook(book.id).subscribe(data => {
      alert("Libro eliminado");
      setTimeout(() => {
        this.getBooks();
       }, 200)
    }, error => {
      console.error(error);
      alert('No se pudo eliminar el libro');
    });
  }





//////////// Ejemplo para enviar archivos(en este caso procesar una imagen) por medio de form-data //////

  //processFile(imageInput: any) {
  //  const reader = new FileReader();
  //  this.imgToUpload = imageInput.files[0];
  //  let mimeType = this.imgToUpload.type;
//
  //  if (mimeType.match(/image\/*/) == null) {
  //    alert('Formato erroneo');
  //    return;
  //  }
  //  reader.readAsDataURL(this.imgToUpload);
  //  reader.onload = (_event) => {
  //    this.imgTemp = reader.result;
  //  }
  //}
//
  //uploadImage() {
  //  let formData: FormData = new FormData();
  //  formData.append('file', this.imgToUpload);
//
  //  this.bookService.uploadImage(formData).subscribe(response => {
  //    console.log(response);
  //  }, e => {
  //    alert('error al subir imagen');
  //    console.log(`error al subir imagen ${e}`);
  //  });
  //}

}
