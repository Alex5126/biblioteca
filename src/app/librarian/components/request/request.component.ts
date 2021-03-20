import { Component, OnInit } from '@angular/core';
import { LoanApplication } from 'src/app/models/loanApplications';
import { LoanApplicationsService } from 'src/app/services/loan-applications.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public iduser:any;
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
    loanApplication.update_date = Date()
    loanApplication.status = "RECHAZADA"
    console.log(loanApplication.id)
    /*this.loanApplicationsService.updateLoanApp(loanApplication).subscribe(data => {
      console.log(data);
      alert(data.message);
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });*/
    this.getLoanApp()
  }
  deliverAcept(loanApplication:LoanApplication){
    loanApplication.update_date = Date()
    loanApplication.status = "ACEPTADA"
    console.log(loanApplication.id)
    /*this.loanApplicationsService.updateLoanApp(loanApplication).subscribe(data => {
      console.log(data);
      alert(data.message);
    }, error => {
      console.error(error);
      alert('Error al guardar');
    });*/
    this.getLoanApp()
  }

}
