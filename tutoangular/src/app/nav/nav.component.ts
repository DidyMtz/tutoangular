import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() connected : boolean = false;

  constructor(private auth : AuthService, private route: Router) { }

  ngOnInit(): void {
    this.isConnected()
  }

  isConnected(){
    return this.auth.isConnected();
  }

  logout(){
    sessionStorage.clear();
    this.route.navigate(['/home']);

  }

}
