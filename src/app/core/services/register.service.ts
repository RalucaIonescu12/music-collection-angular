// account.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'https://localhost:7263/api';

  constructor(private http: HttpClient) { }

  createUser(accountData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Accounts/create-user`, accountData);
  }
  loginUser(accountData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Accounts/login-account`, accountData);
  }
}
