import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  Email
  password
  Name
  constructor(private router: Router) { }

  ngOnInit() {
  }
  Login(){
    
    this.router.navigateByUrl('login')
  }
  SignUp(){
    this.router.navigateByUrl('home')
  }
}
