import { Injectable } from '@angular/core';
import { LoanHistory } from '../models/loanHistory';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicResponse } from '../models/general';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanHistoryService {

  constructor(private http:HttpClient) { }

  getLoanApp():Observable<LoanHistory[]>{
    return this.http.get<LoanHistory[]>(`${environment.apiUrl}/loan-hist`);
  }

  getLoanAppID(id:any):Observable<LoanHistory[]>{
    return this.http.get<LoanHistory[]>(`${environment.apiUrl}/loan-hist/${id}`);
  }
  
  deleteLoanApp(id:any):Observable<BasicResponse>{
    return this.http.delete<BasicResponse>(`${environment.apiUrl}/loan-hist/${id}`);
  }

  addLoanApp(loanHistory:LoanHistory):Observable<BasicResponse>{
    return this.http.post<BasicResponse>(`${environment.apiUrl}/loan-hist`,loanHistory);
  }

  updateLoanApp(loanHistory:LoanHistory){
    console.log(loanHistory)
    return this.http.put<BasicResponse>(`${environment.apiUrl}/loan-hist/${loanHistory.id}`,loanHistory);
  }
}
