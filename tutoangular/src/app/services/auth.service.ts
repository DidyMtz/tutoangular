import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isConnected(){
 return  sessionStorage.getItem('email') != null;
  }

  
}
