import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  items!: FormArray

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.AddNewRow();
  }

  initForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9]{9}$/)]),
      alladresse: new FormArray([])
    })
  }
  register() {
    const item = this.registerForm.value;
    this.route.navigate(['/accueil']);
  }

  AddNewRow() {
    this.items = this.registerForm.get('alladresse') as FormArray;
    this.items.push(this.GenRow());
  }
  removeRow(i: number) {
    this.items = this.registerForm.get('alladresse') as FormArray;
    this.items.removeAt(i);
  }
  get alladresse() {
    return this.registerForm.get('alladresse') as FormArray;
  }

  GenRow(): FormGroup {
    return new FormGroup({
      adresse: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      etat: new FormControl('', Validators.required),
      zip: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    });
  }

}