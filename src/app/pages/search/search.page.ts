import { Component,ViewChild, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service/management.service';
import { IonSearchbar, IonSlides, ModalController, Platform} from '@ionic/angular'
import { FiltrePage } from '../filtre/filtre.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('search',{static:false}) search : IonSearchbar;
  searchedItem
  constructor(private managementService:ManagementService,
              private modalController:ModalController,) { 
    console.log("res from search  "+JSON.stringify(this.managementService.listProvider))
  this.searchedItem=this.managementService.listOffre;
  }

  ngOnInit() {
    this.managementService.get_list_produit()
  }

  ionViewDidEnter(){
    setTimeout(() =>{
      this.search.setFocus();
    })
  
  }


  async filtremodal(value){
    console.log("filtre search");
    const modal=this.modalController.create({
      component: FiltrePage,
      cssClass:'my-modal-css',
      componentProps:{
        passurl:value
      }
    });
    return (await modal).present();
  }
  onSearchChange(event){
    console.log((event.detail.value));
    let val = event.target.value;
    this.searchedItem = this.managementService.listOffre;
    if(val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any)=>{
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }

  }

}
