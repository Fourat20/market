import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from "@ionic/storage";

// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email
  password
  AccessToken
  constructor(private router: Router,
              private auth: AuthService,
              private googlePlus: GooglePlus,
              private storage: Storage
              // private fb: Facebook
              ) { }

  ngOnInit() {
    this.getAT()
  }

  getAT(){
    this.storage.get("AccessToken").then((res) => {
      this.AccessToken=res
       console.log("AccessToken from storage " +JSON.stringify(res) );
  
       if(this.AccessToken)
       {
         console.log("AT: "+this.AccessToken)
         this.router.navigate(['tabs/tabs/home'])
       }else
       console.log("else aT "+this.AccessToken);
       
      });
  }
  Register(){
    
    this.router.navigateByUrl('sign-up')
  }
 async Login(){
    this.auth.email=this.email
    this.auth.password=this.password
await this.auth.login()
await this.delay(200)
if(this.auth.AccessToken){ 
  this.router.navigateByUrl('tabs/tabs/home')
}else{
  alert("err email or password")
}
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
