import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ManagementService } from 'src/app/services/management.service/management.service';
import { VideopopupService } from 'src/app/services/videopopup.service/videopopup.service';
import { VideopopupPage } from '../videopopup/videopopup.page';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  watched=[]
  constructor(private modalController:ModalController,
              private videoService:VideopopupService,
              private managementService:ManagementService,
              public platform: Platform,) { 

              
                this.platform.backButton.subscribeWithPriority(0, () => {
               this.dismiss()
                  console.log(platform.backButton)
                })
              
              }
              items=[];
              var=false
config={
  spaceBetween:0,
  centeredSlides:true,
  slidesPerView:1.4,
  loop:true,
  autoplay:true
};
  async ngOnInit() {
    this.items=this.videoService.getvideos();
    console.log(this.items);
 await   this.managementService.get_game() 
 await this.delay(2000)
 for(let i=0;i<this.managementService.game.length;i++)
{ if(this.managementService.game[i].end_date>Date.now())
 {
   console.log("done game");
   
 }
 
}   
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async videomodal(value){
    const modal= await this.modalController.create({
      component: VideopopupPage,
      cssClass:'my-modal-css',
      backdropDismiss:this.var,
      componentProps:{
        passurl:value,
        isModal:true
      }
    });

    console.log(" this.var first "+ this.var)  
    
    modal.present();
    await this.delay(10000)
    this.var=true
 await this.managementService.post_game_view()
 await this.delay(5000)
    console.log(" this.var "+ this.var)
    console.log(" this.var "+ this.managementService.gameViewer.watch_video)

    if(this.managementService.gameViewer.watch_video==1){
      this.watched=this.managementService.gameViewer.watch_video
      this.dismiss()
    }
  }


  
  async lockApp(){
    const modal =await this.modalController.create({
      component:VideopopupPage,
      backdropDismiss:false,
      cssClass:'my-modal-css',
      componentProps:{
        isModal:true
      }
    });
    modal.present();
    
      }
      dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
          'dismissed': true
        });
      }


}
