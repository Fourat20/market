import { Component, ViewChild, ViewChildren } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonSlides, Platform} from '@ionic/angular'
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { ManagementService } from 'src/app/services/management.service/management.service';
import { Storage } from "@ionic/storage";
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
              private managementService:ManagementService) {
                this.platform.backButton.subscribeWithPriority(0, () => {
                  console.log(platform.backButton)
                })
                this.countDown()

              
                 this.managementService.get_list_provider()

                 if( !this.auth.AccessToken){
                  this.router.navigateByUrl('login')
                 }
                 this.getFav()
                 this.postFav()
                
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
       alert("favorieArrGet " +JSON.stringify(res) );
    });
  }


  async postFav(){
  await this.managementService.get_list_produit()
  await this.getFav()
  
  for(let i=0; this.managementService.listOffre.length ;i++)
{
  for(let j=0;this.favorieArrGet.length;j++){
    if(this.managementService.listOffre[i]==this.favorieArrGet[j])
    {
      this.managementService.listOffre[i].fav=1
    }else
    {
      this.managementService.listOffre[i].fav=0
    }
  }
 
  alert("new listOffre   "+this.managementService.listOffre[i].fav)
}

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

    // console.log("this.managementService.listProvider: "+this.managementService.listProvider);
    
    let  search_key =  event.target.value
    this.result = ""

  // console.log( this.provider_res) ;
//  Search an element right Now
  for(var i = 0; i < this.managementService.listProvider.length; i++)
  {

    // console.log("Read an element ")
    // console.log(this.provider_res[i])

    // @ts-ignore
    if(this.managementService.listProvider[i].name === search_key){
      console.log(this.managementService.listProvider[i])
        this.result = JSON.stringify(this.managementService.listProvider[i])
        console.log( this.result)
        // this.router.navigateByUrl('/tabs/tabs/search')
    }
    // if(restaurants[i].restaurant.food == 'chicken')
    // {
    //   return restaurants[i].restaurant.name;
    // }


  }


      // console.log("this.managementService.listProvider: "+this.managementService.listProvider);
    
    //   let  search_key2 =  event.target.value
    //   this.result2 = ""
  
    // for(var i = 0; i < this.managementService.listOffre.length; i++)
    // {
  
    
    //   if(this.managementService.listOffre[i].title === search_key2){
    //     console.log(this.managementService.listOffre[i])
    //       this.result2 = JSON.stringify(this.managementService.listOffre[i])
    //       console.log("offre    "+ this.result2)
    //   }

  
  
    // }
  }
}
