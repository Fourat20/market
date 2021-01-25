import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  Email
  password
  Full_name
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }
  Login(){
    
    this.router.navigateByUrl('login')
  }
  SignUp(){
    // this.router.navigateByUrl('home')
    this.authService.signup()
  }
}
