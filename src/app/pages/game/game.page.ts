import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideopopupService } from 'src/app/services/videopopup.service/videopopup.service';
import { VideopopupPage } from '../videopopup/videopopup.page';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  constructor(private modalController:ModalController,
              private videoService:VideopopupService) { }
              items=[];
config={
  spaceBetween:0,
  centeredSlides:true,
  slidesPerView:1.4,
  loop:true,
  autoplay:true
};
  ngOnInit() {
    this.items=this.videoService.getvideos();
    console.log(this.items);
    
  }

  async videomodal(value){
    const modal=this.modalController.create({
      component: VideopopupPage,
      cssClass:'my-modal-css',
      componentProps:{
        passurl:value
      }
    });
    return (await modal).present();
  }
}
