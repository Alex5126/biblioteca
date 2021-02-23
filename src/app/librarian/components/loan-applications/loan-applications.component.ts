import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanApplication } from 'src/app/models/loanApplication';
import { LoanApplicationService } from 'src/app/services/loan-application.service';

@Component({
  selector: 'app-loan-applications',
  templateUrl: './loan-applications.component.html',
  styleUrls: ['./loan-applications.component.scss']
})
export class LoanApplicationsComponent implements OnInit {

  public load: boolean = true;
  public loanApps: LoanApplication[] = [];
  public editLoanApp: boolean = false;

  constructor(private loanAppService: LoanApplicationService,) {
  }


  ngOnInit(): void {
    this.getLoanApps();
  }

  getLoanApps() {
    this.load = true;
    this.loanAppService.getAllLoanApps().subscribe(data => {      
      this.loanApps = data;
      console.log(this.loanApps);
      
      this.load = false;
    }, error => {
      console.log(error)
      this.load = false;
    });
  }


  updateLoanApp(loanApp:LoanApplication, status:string){
    let resp:LoanApplication = {
      id:loanApp.id,
      id_book:loanApp.id_book,
      id_user:loanApp.id_user,
      status:status,
    }
    this.loanAppService.updateLoanApp(resp).subscribe(data => {
      console.log(data);
      alert('usuario modificado correctamente');
      this.editLoanApp = false;
      this.getLoanApps();
    }, error => {
      console.log(error);
      alert(error);
    });
  }

}
