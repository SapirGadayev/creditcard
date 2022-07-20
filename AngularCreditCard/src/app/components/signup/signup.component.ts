import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export function passwordsMatchValidators(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }
    return null;
  };
}
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsMatchValidators() })

  constructor(private authService: AuthenticationService, private toast: HotToastService, private router: Router) { }

  ngOnInit(): void { }

  get name() {
    return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  submit() {
    if (!this.signupForm.valid) return;
    const { name, email, password } = this.signupForm.value;
    this.authService.signup(name, email, password).pipe(
      this.toast.observe({
        success: 'Congrats! You are all signed up',
        loading: 'signing in',
        error: ({message}) => message
      })
    ).subscribe(() => {
      this.authService.loggedIn.next(true); 
      this.router.navigate(['/home']);
    })
  }
}
