import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {
  userData: any; 
  name: any;
  constructor(private router: Router,private accountService: AccountService) {
   
    this.userData = this.accountService.getUserData();
    this.name = this.accountService.getName();
  }
  updateName() {
    const userId = this.accountService.getUserId(); 
    this.accountService.updateName(userId, this.name).subscribe(
      (response) => {
        console.log('Name updated successfully.', response);
           },
      (error) => {
        console.error('Failed to update name.', error);
           }
    );
  }
  logout() {
    this.accountService.setName("");
    this.accountService.setUserData(null);
    localStorage.removeItem("token");
    this.accountService.setUserId("");
    console.log(localStorage.getItem("token"));
    this.router.navigate(['']);
  }
}
