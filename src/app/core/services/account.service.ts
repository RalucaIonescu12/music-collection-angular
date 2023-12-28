import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private userId: any;
  private name: any;
  private userData: any; 
  private isAuthenticated: boolean = false;
  constructor(private http: HttpClient, private router:Router)  { }

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId(): string {
    return this.userId;
  }
  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setUserData(userData: any) {
    this.userData = userData;
  }
  isAuthenticatedUser(): boolean {
    
    const token = localStorage.getItem('token');
    this.isAuthenticated = !!token;
    return this.isAuthenticated;
  }
  getUserData(): any {
    return this.userData;
  }
  updateName(userId: string, name: string): Observable<any> {
    const url = `https://localhost:7263/api/Accounts/${userId}`;
    const body = { name }; 
    this.name = name;
    return this.http.put(url, body);
  }
  logout() {
  
    this.isAuthenticated = false;
    this.router.navigate(['/login']); 
  }
  redirectToLogin() {
    this.router.navigate(['/login']);
  }

}
