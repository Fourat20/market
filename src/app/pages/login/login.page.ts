import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email
  password
  constructor(private router: Router,
              private auth: AuthService,
              private googlePlus: GooglePlus,
              // private fb: Facebook
              ) { }

  ngOnInit() {
  }
  Register(){
    
    this.router.navigateByUrl('sign-up')
  }
  Login(){
    this.auth.email=this.email
    this.auth.password=this.password
this.auth.login()
if(this.auth.AccessToken){ 
  this.router.navigateByUrl('tabs/tabs/home')
}else{
  alert("err email or password")
}
  }

  LoginGoogle(){
this.auth.LoginGoogle()

  }
  Loginfacebook(){
  //   this.fb.login(['public_profile', 'user_friends', 'email'])
  //   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  //   .catch(e => console.log('Error logging into Facebook', e));
  
  
  // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  alert("erreur permission")
  }
}
