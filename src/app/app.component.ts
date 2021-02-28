import { Component } from '@angular/core';

import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { PubPage } from './pages/pub/pub.page';
import { ManagementService } from './services/management.service/management.service';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  AccessToken
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private modalCtrl: ModalController,
    private managementService:ManagementService,
    private storage: Storage
  ) {
    this.initializeApp();
    // this.managementService.get_notification()
   
  }

  async initializeApp() {
   await this.getAT()
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if((this.router.url!='/login') && (this.router.url!='/sign-up')){ 
        this.router.navigate(['/pub'])
      }
    });
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
}
