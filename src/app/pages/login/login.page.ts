import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Email
  password
  constructor(private router: Router) { }

  ngOnInit() {
  }
  Register(){
    
    this.router.navigateByUrl('sign-up')
  }
  Login(){
    this.router.navigateByUrl('home')
  }
}
