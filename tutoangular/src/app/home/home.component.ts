import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messageEmail!: string;
  messagePassword!: string;
  loginform!: FormGroup;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.getErrorPasswordMessage();
    this. getErrorEmailMessage();
  }

  initForm() {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z0-9]{9}$/)])
    })
  }

  onSubmit() {
    if (!this.loginform.valid) return;
    const email = this.loginform.get('email')?.value;
    sessionStorage.setItem('email', email);

    this.route.navigate(['/accueil']);

  }
  getErrorEmailMessage() {
    if (this.loginform.controls['email'].hasError('required')) {
      return 'Vous devez entrer une valeur';
    }

    return this.loginform.controls['email'].hasError('email') ? `Désolé, email incorrect` : '';
  }

  getErrorPasswordMessage() {
    if (this.loginform.controls['password'].hasError('required')) {
      return 'Vous devez entrer une valeur';
    }
    
      return this.loginform.controls['password'].hasError('pattern') ? 'Désolé, password incorrect' : '';

    
  }
}
