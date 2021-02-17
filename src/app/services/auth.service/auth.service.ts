import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlGlobal="https://shop.lunura.com"
  AccessToken: any;
  name
  email
  password

  constructor(private httpClient: HttpClient,
              private nativeHttp: HTTP,) { }

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
      alert('AccessToken: '+ u_data.token)
      this.AccessToken= u_data.token
    })
    .catch((error) => {
      alert("err token: "+JSON.stringify (error))
    });


}
}
