import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.scss']
})
export class BorrowedBooksComponent implements OnInit {

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
