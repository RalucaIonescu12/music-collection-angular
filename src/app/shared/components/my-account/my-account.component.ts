import { Component } from '@angular/core';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {
  userData: any; // Define a proper interface or model for user data.
  name: any;
  constructor(private accountService: AccountService) {
    // Get user data from the service when the component initializes.
    this.userData = this.accountService.getUserData();
    this.name = this.accountService.getName();
  }
}
