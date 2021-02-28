import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from "@ionic/storage";
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlGlobal="https://shop.lunura.com"
  AccessToken: any;
  name
  email
  password
  profileData
  UserData

  constructor(private router: Router,
              private httpClient: HttpClient,
              private nativeHttp: HTTP,
              private storage: Storage,
              private googlePlus: GooglePlus,) { }

signup(){
  let postData = {
    "name": this.name,
    "email": this.email,
    "password":  this.password,
},
headers= {
  'Content-Type': 'application/x-www-form-urlencoded',
}

  // END checking
   this.nativeHttp
    .post(this.urlGlobal+"/api/user/signup",postData,headers)
    .then(async (data) => {
      var u_data = JSON.parse(data.data);

      alert('data SignUp: '+ JSON.stringify (u_data))
   
    })
    .catch((error) => {
      alert("err token: "+JSON.stringify (error))
    });


}

login(){
  let postData = {
    "email": this.email,
    "password": this.password,
},
headers= {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
}
   this.nativeHttp
    .post(this.urlGlobal+"/api/user/login",postData,headers)
    .then(async (data) => {
      var u_data = JSON.parse(data.data);
       console.log('AccessToken: '+ u_data.token)
      this.UserData=u_data.user
      this.AccessToken= u_data.token
      this.storage.set("AccessToken", this.AccessToken);
   
    })
    .catch((error) => {
      alert("err token: "+JSON.stringify (error))
    });


}

LoginGoogle(){
  this.googlePlus.login({})
  .then(res => {
    alert(JSON.stringify(res))
    this.profileData=res
 this.AccessToken=res.accessToken
 this.storage.set("AccessToken", this.AccessToken);
 this.router.navigateByUrl('tabs/tabs/home')
  }
  )
  .catch(err => console.error(err));
}
}
