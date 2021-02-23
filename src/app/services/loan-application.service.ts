import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoanApplication } from '../models/loanApplication';
import { BasicResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {

  private url:string = `${environment.apiUrl}/loan-app`;

  constructor(private http:HttpClient) { }

  getAllLoanApps():Observable<LoanApplication[]>{
    return this.http.get<LoanApplication[]>(this.url);
  }

  addLoanApp(loanApp:LoanApplication):Observable<BasicResponse>{
    return this.http.post<BasicResponse>(this.url,loanApp);
  }

  updateLoanApp(loanApp:LoanApplication):Observable<BasicResponse>{
    return this.http.put<BasicResponse>(`${this.url}/${loanApp.id}`,loanApp);
  }

  deleteLoanApp(id:any):Observable<BasicResponse>{
    return this.http.delete<BasicResponse>(`${this.url}/${id}`);
  }
}
