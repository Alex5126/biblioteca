import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoanHistory } from '../models/loanHistory';
import { BasicResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class LoanHistoryService {

  private url:string = `${environment.apiUrl}/loan-hist`;

  constructor(private http:HttpClient) { }

  getAllLoanHist():Observable<LoanHistory[]>{
    return this.http.get<LoanHistory[]>(this.url);
  }

  addLoanHist(loanHist:LoanHistory):Observable<BasicResponse>{
    return this.http.post<BasicResponse>(this.url,loanHist);
  }

  updateLoanHist(loanHist:LoanHistory):Observable<BasicResponse>{
    return this.http.put<BasicResponse>(`${this.url}/${loanHist.id}`,loanHist);
  }

  deleteLoanHist(id:any):Observable<BasicResponse>{
    return this.http.delete<BasicResponse>(`${this.url}/${id}`);
  }
}
