import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  password
  name
  email

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
  }
  Login(){
    
    this.router.navigateByUrl('login')
  }
  SignUp(){
    // this.router.navigateByUrl('home')
this.auth.name=this.name
this.auth.email=this.email
this.auth.password=this.password
    this.auth.signup()
  }
}
