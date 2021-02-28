import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonSearchbar, IonSlides, ModalController, Platform} from '@ionic/angular'
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { ManagementService } from 'src/app/services/management.service/management.service';
import { Storage } from "@ionic/storage";
import { HttpClient } from '@angular/common/http';
import { FiltrePage } from '../filtre/filtre.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@ViewChildren('slides') slides: IonSlides;
buttonName = "NEXT";
selectedSlide: any;
slideOpts={slidesPerView:1,};
favorie=0
offset=0
result
result2
favorieArr=[]
favorieArrGet=[]
provider_res
cards=[
  {
    'image':'../../assets/article/bracelet.jpg',
    'percentage':'30%',
    'title':'test',
    'description':'descriptiondescriptiondescriptiondescriptiondescription',
    'price_after':'2'
  },
  {
    'image':'../../assets/article/t-shirt.jpg',
    'percentage':'20%',
    'title':'test',
    'description':'descriptiondescription',
    'price_after':'20'
  },
  {
    'image':'../../assets/article/pc1.jpg',
    'percentage':'22%',
    'title':'pc',
    'description':'descriptiondescriptionpc1',
    'price_after':'5'
  },
]

categories=[
  {
  'name':'Categorie',
  'image':'../../../assets/categorie/categories.svg'
  },
  {
    'name':'Vêtements',
    'image':'../../../assets/categorie/fashion.svg'
    },
    {
      'name':'High-tech',
      'image':'../../../assets/categorie/cpu.svg'
      },
      {
        'name':'Beauté',
        'image':'../../../assets/categorie/cosmetics.svg'
        },
        {
          'name':'Restauration',
          'image':'../../../assets/categorie/food.svg'
          },
          {
            'name':'Marché',
            'image':'../../../assets/categorie/market.svg'
            },
            {
              'name':'Automobile',
              'image':'../../../assets/categorie/car.svg'
              },
              {
                'name':'Déco',
                'image':'../../../assets/categorie/shelves.svg'
                },
                {
                  'name':'Loisir',
                  'image':'../../../assets/categorie/bike.svg'
                  },
                  {
                    'name':'Accessoires',
                    'image':'../../../assets/categorie/necklace.svg'
                    },
                    {
                      'name':'Service',
                      'image':'../../../assets/categorie/customer.svg'
                      },
]
  constructor(private router: Router,
              public platform: Platform,
              private auth: AuthService,
              private storage: Storage,
              private httpClient: HttpClient,
              private managementService:ManagementService,
              private modalController:ModalController,) {
                this.platform.backButton.subscribeWithPriority(0, () => {
                  console.log(platform.backButton)
                })
                this.countDown()

              this.managementService.get_list_produit()
                 this.managementService.get_list_provider()

                //  if( !this.auth.AccessToken){
                //   this.router.navigateByUrl('login')
                //  }
                //  this.getFav()
                //  this.postFav()
                
                 this.getTest()
              }
              config={
                spaceBetween:10,
                centeredSlides:true,
                slidesPerView:1,
                loop:true,
                autoplay:true
              };
              config2={
                spaceBetween:0,
                centeredSlides:true,
                slidesPerView:1.4,
                loop:true,
                autoplay:true
              };
              
  ionSlideChange(slides){

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
  
  next(){
    this.selectedSlide.getActiveIndex().then((slidesIndex) =>{
      if(slidesIndex==2){
        console.log("Done Slider");
        this.router.navigateByUrl('login')
      }else{
        this.selectedSlide.slideNext();
      }
    })
  }
  goCategorie(){
    // let id:NavigationExtras={
    //   queryParams:{
    //     id:this.managementService.listOffre[i]._id
    //   }
    // }
    // console.log("this.managementService.listOffre[i]._id "+this.managementService.listOffre[i]._id)
    this.router.navigateByUrl('tabs/tabs/categorie')
  }
  getFav(){
    this.storage.get("favorie").then((res) => {
      this.favorieArrGet=res
       console.log("favorieArrGet " +JSON.stringify(res) );
    });
  }


  async postFav(){
   this.managementService.get_list_produit()
   this.getFav()
   await this.delay(2000)
  for(let i=0; this.favorieArrGet.length ;i++)
{
  console.log("from first for"+this.favorieArrGet.length);
  
  // for(let j=0;this.managementService.listOffre.length;j++){
  //   console.log("from second for");
  //   if(this.managementService.listOffre[i]==this.favorieArrGet[j])
  //   {
  //     console.log("if");
  //     this.managementService.listOffre[i].fav=1
  //   }else
  //   {
  //     console.log("else");
  //     this.managementService.listOffre[i].fav=0
  //   }
  // }
 
  alert("new listOffre   "+this.managementService.listOffre[i].fav)
  console.log("new listOffre:  "+this.managementService.listOffre[i].fav);
}

}

delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
  goGame(){
    this.router.navigateByUrl('tabs/tabs/game')
  }
  get_list_produit(){
    this.managementService.get_list_produit()
  }
  gofav(){
    this.router.navigateByUrl('tabs/tabs/favorie')
  }
  fav(card){
    this.favorie=1
     this.favorieArr.push(card)
    this.storage.set("favorie", this.favorieArr);
alert("this.favorieArr " +this.favorieArr)
  }
  notfav(card){
    this.favorie=0
  
    
    this.storage.get("favorie").then((res) => {
      // console.log("The session TOKEN value is " + res);
       this.favorieArr=res.splice(res.length, 1);


    });
    console.log( this.favorieArr);
  }
  

  countDown(){
    // Set the date we're counting down to
  var countDownDate = new Date("Jan 31, 2022 23:37:25").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  }


  onSearchChange(event){

    this.router.navigateByUrl('tabs/tabs/search')

//     // console.log("this.managementService.listProvider: "+this.managementService.listProvider);
    
//     let  search_key =  event.target.value
//     this.result = ""

//   // console.log( this.provider_res) ;
// //  Search an element right Now
//   for(var i = 0; i < this.managementService.listProvider.length; i++)
//   {

//     // console.log("Read an element ")
//     // console.log(this.provider_res[i])

//     // @ts-ignore
//     if(this.managementService.listProvider[i].name === search_key){
//       console.log(this.managementService.listProvider[i])
//         this.result = JSON.stringify(this.managementService.listProvider[i])
//         console.log( this.result)
//         // this.router.navigateByUrl('/tabs/tabs/search')
//     }
//     // if(restaurants[i].restaurant.food == 'chicken')
//     // {
//     //   return restaurants[i].restaurant.name;
//     // }


//   }


//       // console.log("this.managementService.listProvider: "+this.managementService.listProvider);
    
//     //   let  search_key2 =  event.target.value
//     //   this.result2 = ""
  
//     // for(var i = 0; i < this.managementService.listOffre.length; i++)
//     // {
  
    
//     //   if(this.managementService.listOffre[i].title === search_key2){
//     //     console.log(this.managementService.listOffre[i])
//     //       this.result2 = JSON.stringify(this.managementService.listOffre[i])
//     //       console.log("offre    "+ this.result2)
//     //   }

  
  
//     // }
  }

deleteFav(i){
  this.provider_res[i].fav = false
  // this.provider_res[2].fav = true

  this.storage.set("favorie", this.provider_res);
}


  
  addfav(i) {
  
    this.provider_res[i].fav = true
    this.storage.set("favorie", this.provider_res);

  }

  openfav() {
    alert(JSON.stringify(this.provider_res[1].fav))
  }

  getTest(){
    this.httpClient.get("https://shop.lunura.com/api/offer").subscribe((res: any) =>{
      // @ts-ignore
      this.provider_res = res
      // @ts-ignore
      console.log(this.provider_res.length) ;


      // @ts-ignore
      for(let i=0; i< this.provider_res.length ;i++)
      {
        // @ts-ignore
        this.provider_res[i].fav = false;
        // @ts-ignore
        console.log(JSON.stringify(this.provider_res[i]) )
      }
    })
  }

  async filtremodal(value){
    console.log("filtre");
    
    const modal=this.modalController.create({
      component: FiltrePage,
      cssClass:'my-modal-css',
      componentProps:{
        passurl:value
      }
    });
    return (await modal).present();
  }
}
