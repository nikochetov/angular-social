import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup;
  maxDate = new Date();
  hide = true;
  constructor() { }

  ngOnInit(): void {
    this.signupFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      userName: new FormControl('', [
        Validators.required
      ]),
      dateOfBirth: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, Validators.email
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

  onClick(): void {
    const value = this.signupFormGroup.value;
    console.log(value);
    const entered = Object.keys(value).filter(key => value[key]).length
    const total = Object.keys(value).length
    console.log(entered === total)
  }

}
