import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupFormGroup: FormGroup;
  maxDate = new Date();
  hide = true;
  constructor() { }

  ngOnInit(): void {
    this.signupFormGroup = new FormGroup({
      userName: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  get _email(): AbstractControl {
    return this.signupFormGroup.get('email')
  }

  getErrorMessage() {
    if (this._email.hasError('required')) {
      return 'You must enter a value';
    }

    return this._email.hasError('email') ? 'Not a valid email' : '';
  }
}
