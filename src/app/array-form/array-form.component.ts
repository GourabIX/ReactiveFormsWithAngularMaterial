import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  myReactiveForm: FormGroup;      // FormGroup is a class that can manipulate and validate a group of form-fields together.

  constructor(private _formBuilder: FormBuilder) { }      // FormBuilder is a service class that helps us create reactive
                                                          // forms using FormGroups.

  ngOnInit() {
    this.myReactiveForm = this._formBuilder.group({
      email: '',
      phones: this._formBuilder.array([])
    })
  }

  get phonesForm() {
    return this.myReactiveForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this._formBuilder.group({
      prefixCode: [],
      lineNumber: []
    })
    this.phonesForm.push(phone);
  }

  deletePhone(i: number) {
    this.phonesForm.removeAt(i);
  }

}
