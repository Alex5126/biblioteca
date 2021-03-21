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

  getLoanHist():Observable<LoanHistory[]>{
    return this.http.get<LoanHistory[]>(`${environment.apiUrl}/loan-hist`);
  }

  getLoanHistID(id:any):Observable<LoanHistory[]>{
    return this.http.get<LoanHistory[]>(`${environment.apiUrl}/loan-hist/${id}`);
  }
  
  deleteLoanHist(id:any):Observable<BasicResponse>{
    return this.http.delete<BasicResponse>(`${environment.apiUrl}/loan-hist/${id}`);
  }

  addLoanHist(loanHistory:LoanHistory):Observable<BasicResponse>{
    return this.http.post<BasicResponse>(`${environment.apiUrl}/loan-hist`,loanHistory);
  }

  updateLoanHist(loanHistory:LoanHistory){
    console.log(loanHistory)
    return this.http.put<BasicResponse>(`${environment.apiUrl}/loan-hist/${loanHistory.id}`,loanHistory);
  }
}
