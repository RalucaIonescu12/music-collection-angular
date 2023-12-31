
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../core/services/account.service';
import { RegisterService } from '../../core/services/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  providers: [RegisterService]
})
export class LoginComponent implements OnInit {
  public registerForm = this.formBuilder.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });
  public hide: Boolean = true;

  // extra
  public imageUrl = 'https://thescranline.com/wp-content/uploads/2021/03/Vanilla-Cupcakes';
  public value = '2';

  constructor(private readonly formBuilder: FormBuilder,
    private registerService: RegisterService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  checkForm() {
    console.log(this.registerForm.value);
    this.getFormValidationError([ 'email']);

    const accountData = this.registerForm.value;
    
    this.registerService.loginUser(accountData).subscribe(
      (response2) => {
        const token = response2?.token;
        console.log('toke : ', token);
        if (token) {
          localStorage.setItem('token', token);
          this.accountService.setUserData(accountData);
          this.accountService.setUserId(response2?.id);
          this.accountService.setName(response2?.name);
          localStorage.setItem('userRole', response2?.role); 

          console.log(this.accountService.getUserId(), " aha", this.accountService.getUserData());
               this.router.navigate(['/menu']);
        }
      },
      (error) => {
        console.error('Error login user:', error);
      }
    );
   }

  getFormValidationError(keys: any) {
    keys.forEach((key: any) => {
      const controlErrors = this.registerForm.get(key)?.errors;
      if (controlErrors != null) {
        console.error(key + ' has errors: ' + controlErrors);
      }
    })
  }

}
