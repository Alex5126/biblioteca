import { Component, OnInit } from '@angular/core';
import { LoanApplications } from 'src/app/models/loan-applications';
import {LoanApplicationsService} from 'src/app/services/loan-applications.service'
import { AuthService } from 'src/app/services/auth.service';
import {LoanAppRequest} from 'src/app/models/loanAppRequest';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  public displayedColumns:string[] = [ 'id', 'user', 'book', 'date', 'update_date', 'status', 'opcs'];
  public loanApplications:LoanApplications[] = [];
  public loanRequest:LoanAppRequest = {};
  public fecha:Date = new Date();
  public showButton:boolean = true;

  constructor(private loanAppService:LoanApplicationsService,  public authService:AuthService ) { }

  ngOnInit(): void {   
     setTimeout(() => {
      this.getLoanApplications();
     }, 200)  
  }


  getLoanApplications(){
    this.loanAppService.getLoanApplications().subscribe(data => {
      this.loanApplications = data;
    }, e => {
      console.log(e.error.message);
      alert("Error, No se puede obtener la lista de solicitudes");
      this.authService.logout;
    });
  }

  updateLoanApplications(status:string, element:LoanApplications){
    this.loanRequest.id = element.id;
    this.loanRequest.status = status;
    this.loanRequest.date = element.date;
    this.loanRequest.update_date = this.fecha;
    this.loanRequest.id_book = element.id_book;
    this.loanRequest.id_user = element.id_user;
    
    switch (status) {
        case 'RECHAZADA':
          this.updateLoan(this.loanRequest); 
        break;

        case 'ACEPTADA':
          this.updateLoan(this.loanRequest);
          console.log( this.loanRequest);
        break;
    }
  }

  updateLoan(element:LoanAppRequest){
    this.loanAppService.updateLoanApplicationsById(element).subscribe(data => {
      console.log(data);
      setTimeout(() => {
             this.getLoanApplications();
      }, 200)
      alert("Actualizacion realizada");
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
  }


}