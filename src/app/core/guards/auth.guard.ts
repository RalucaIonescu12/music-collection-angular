import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private accountService: AccountService) { }

  canActivate(): boolean {
    const isAuthenticated = this.accountService.isAuthenticatedUser();
    if (isAuthenticated) {
      console.log('User is authenticated');
      return true;
    } else {
      this.router.navigate(['']);
      console.log('User is not authenticated');
      return false;
    }
  }
}
