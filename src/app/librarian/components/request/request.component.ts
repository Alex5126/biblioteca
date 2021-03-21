import { Component, OnInit } from '@angular/core';
import { LoanApplication } from 'src/app/models/loanApplications';
import { LoanApplicationsService } from 'src/app/services/loan-applications.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public displayedColumns:string[] = [ 'id', 'user', 'book','date', 'update_date', 'status', 'opcs'];
  public loanApplication:LoanApplication[] = [];

  constructor(private loanApplicationsService:LoanApplicationsService) { }

  ngOnInit(): void {
    this.getLoanApp()
  }

  getLoanApp() {
    this.loanApplicationsService.getLoanApp().subscribe(data => {
      this.loanApplication = data;
      console.log(this.loanApplication)
      if(this.loanApplication.length === 0)
        alert("Aún no hay solicitudes de prestamos")
    }, e => {
      console.log(e.error.message);
      alert(e.error.message);
    });
  }

  deliver(loanApplication:LoanApplication){
    const dato:LoanApplication = {
      id : loanApplication.id,
      id_book : loanApplication.id_book,
      id_user : loanApplication.id_user,
      status : "ACEPTADA"
    }
    this.loanApplicationsService.updateLoanApp(dato).subscribe(data => {
      console.log(data);
      alert(data.message);
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
    this.getLoanApp()
  }
  deliverAcept(loanApplication:LoanApplication){
    const dato:LoanApplication = {
      id : loanApplication.id,
      id_book : loanApplication.id_book,
      id_user : loanApplication.id_user,
      status : "RECHAZADA"
    }
    this.loanApplicationsService.updateLoanApp(dato).subscribe(data => {
      console.log(data);
      alert(data.message);
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });
    this.getLoanApp()
  }

}
