import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonSlides} from '@ionic/angular'
import { ManagementService } from 'src/app/services/management.service/management.service';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage {
  value='All'
  constructor(private router: Router,
    private managementService:ManagementService) {
      this.get_list_produit()
      this.managementService.get_category()
    }




    get_list_produit(){
      this.managementService.get_list_produit()
    }
    OffreDetails(i){
      let id:NavigationExtras={
        queryParams:{
          id:this.managementService.listOffre[i]._id
        }
      }
      console.log("this.managementService.listOffre[i]._id "+this.managementService.listOffre[i]._id)
this.router.navigate(['/tabs/tabs/article'],id)
    }

    go_Service(){
      this.value='Service';
      console.log(" this.value "+  this.value)
    }
    go_Accessoires(){
      this.value='Accessoires';
      console.log(" this.value "+  this.value)
    }
    go_Loisir(){
      this.value='Loisir';
      console.log(" this.value "+  this.value)
    }
    go_Deco(){
      this.value='Deco';
      console.log(" this.value "+  this.value)
    }
    go_Automobile(){
      this.value='Automobile';
      console.log(" this.value "+  this.value)
    }
    go_Market(){
      this.value='Market';
      console.log(" this.value "+  this.value)
    }
    go_Restauration(){
      this.value='Restauration';
      console.log(" this.value "+  this.value)
    }
    go_Beauty(){
      this.value='Beauty';
      console.log(" this.value "+  this.value)
    }
  go_Maison(){
    this.value='Maison';
    console.log(" this.value "+  this.value)
  }
  go_Vetement(){
    this.value='Vetement';
    console.log(" this.value "+  this.value)
  }
  go_Electronique(){
    console.log("managementService.category.name  "+this.managementService.category.name);
    
    this.value='Electronique';
    console.log(" this.value "+  this.value)
  }
  go_All(){
    this.value='All';
    console.log(" this.value "+  this.value)
  }
}
