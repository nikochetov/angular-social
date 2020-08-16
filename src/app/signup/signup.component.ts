import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // signupFormGroup: FormGroup;
  // maxDate = new Date();
  // isHide = true;
  // isSubmit = false
  // user

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/login'], { queryParams: { registered: true } });
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  // this.signupFormGroup = new FormGroup({
  //   name: new FormControl('', [
  //     Validators.required,
  //   ]),
  //   userName: new FormControl('', [
  //     Validators.required,
  //   ]),
  //   dateOfBirth: new FormControl('', [
  //     Validators.required,
  //   ]),
  //   email: new FormControl('', [
  //     Validators.required, Validators.email,
  //   ]),
  //   password: new FormControl('', [
  //     Validators.required, Validators.email,
  //   ]),

  // get _email(): AbstractControl {
  //   return this.signupFormGroup.get('email')
  // }
  //
  // getErrorMessage() {
  //   if (this._email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this._email.hasError('email') ? 'Not a valid email' : '';
  // }
  //
  // onClick(): void {
  //   const value = this.signupFormGroup.value;
  //   const entered = Object.keys(value).filter(key => value[key]).length
  //   const total = Object.keys(value).length
  //   this.isSubmit = entered === total;
  //   this.user = value;
  //   this.dialogService.addUser(this.user).subscribe(user => console.log('user :', user));
  //   console.log(this.user)
  //   this.dialogService.getUsers().subscribe(u => console.log(u));
  // }

}
