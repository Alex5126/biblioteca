import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanApplications } from 'src/app/models/loan-applications';
import {LoanAppRequest} from 'src/app/models/loanAppRequest';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicResponse } from '../models/general';

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationsService {

  constructor(private http:HttpClient) { }

getLoanApplications():Observable<LoanApplications[]>{
 return this.http.get<LoanApplications[]>(`${environment.apiUrl}/loan-app`);
}

addLoanApplications(loanApplications:LoanApplications):Observable<BasicResponse>{
  return this.http.post<BasicResponse>(`${environment.apiUrl}/loan-app`, loanApplications);
}

updateLoanApplicationsById(loanApplications:LoanAppRequest){
  return this.http.put<BasicResponse>(`${environment.apiUrl}/loan-app/${loanApplications.id}`, loanApplications);
}

}
