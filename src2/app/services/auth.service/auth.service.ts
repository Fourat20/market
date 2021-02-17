import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlGlobal="http://vps-b56f4fee.vps.ovh.net"
  constructor(private httpClient: HttpClient,
              private nativeHttp: HTTP,) { }

signup(){
  let postData = {
    "first_name": "Fourat",
    "last_name": "Brahmi",
    "birth_date": "24/07/1993",
    "mail": "Fourat@email.com",
    "sexe": "M",
    "password": "1248163264",
}
  // this.httpClient.post(this.urlGlobal+"/user/signup",postData).subscribe(
  //   result => {
  //     console.log("result "+JSON.stringify(result));
  //       },
  //      err => {
  //       console.log('err '+JSON.stringify(err));
  //     })


  // END checking
   this.nativeHttp
    .post(this.urlGlobal+"/user/signup",{postData},{})
    .then(async (data) => {
     
      alert('data SignUp: '+ JSON.stringify (data))
   
    })
    .catch((error) => {
      alert("err token: "+JSON.stringify (error))
    });


}
}
