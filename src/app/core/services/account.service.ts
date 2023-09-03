import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private userId: any;
  private name: any;
  private userData: any; // Define a proper interface or model for user data.

  constructor() { }

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

  getUserData(): any {
    return this.userData;
  }


}
