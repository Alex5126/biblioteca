import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanHistory } from 'src/app/models/loan-history';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicResponse } from '../models/general';
import { LoanHistRequest} from 'src/app/models/loanHistRequest'

@Injectable({
  providedIn: 'root'
})
export class LoanHistoryService {

  constructor(private http:HttpClient) { }
 
  getLoanHistory():Observable<LoanHistory[]>{
    return this.http.get<LoanHistory[]>(`${environment.apiUrl}/loan-hist`);
  }

  
  getLoanHistoryUser(id:any):Observable<LoanHistory[]>{
    return this.http.get<LoanHistory[]>(`${environment.apiUrl}/loan-hist/${id}`);
  }
  

 updateLoanHistoryUser(loanRequest:LoanHistRequest){
    return this.http.put<BasicResponse>(`${environment.apiUrl}/loan-hist/${loanRequest.id}`, loanRequest);
  }
  

  
  



}