import { Injectable } from '@angular/core';
import { LoanApplication } from '../models/loanApplications';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicResponse } from '../models/general';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationsService {

  constructor(private http:HttpClient) { }

  getLoanApp():Observable<LoanApplication[]>{
    return this.http.get<LoanApplication[]>(`${environment.apiUrl}/loan-app`);
  }

  getLoanAppID(id:any):Observable<LoanApplication[]>{
    return this.http.get<LoanApplication[]>(`${environment.apiUrl}/loan-app/${id}`);
  }
  
  deleteLoanApp(id:any):Observable<BasicResponse>{
    return this.http.delete<BasicResponse>(`${environment.apiUrl}/loan-app/${id}`);
  }

  addLoanApp(loanApp:LoanApplication):Observable<BasicResponse>{
    return this.http.post<BasicResponse>(`${environment.apiUrl}/loan-app`,loanApp);
  }

  updateLoanApp(loanApp:LoanApplication){
    return this.http.put<BasicResponse>(`${environment.apiUrl}/loan-app/${loanApp.id}`,loanApp);
  }
}
