import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-validated-reactive-form',
  templateUrl: './validated-reactive-form.component.html',
  styleUrls: ['./validated-reactive-form.component.css']
})
export class ValidatedReactiveFormComponent implements OnInit {

  myValidReactiveForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myValidReactiveForm = this._formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      age: [null, [
        Validators.required,
        Validators.min(18),
        Validators.max(70)
      ]],
      phones: this._formBuilder.array([]),
      agree: [false, [
        Validators.requiredTrue
      ]]
    });
  }

  get phonesForm() {
    return this.myValidReactiveForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this._formBuilder.group({
      prefixCode: [],
      lineNumber: []
    });
    this.phonesForm.push(phone);
  }

  deletePhone(i: number) {
    this.phonesForm.removeAt(i);
  }

  get email() {
    return this.myValidReactiveForm.get('email');
  }

  get password() {
    return this.myValidReactiveForm.get('password');
  }

  get age() {
    return this.myValidReactiveForm.get('age');
  }

  get agree() {
    return this.myValidReactiveForm.get('agree');
  }

}
