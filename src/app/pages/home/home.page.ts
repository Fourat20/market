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
favorieArr=[]
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
  constructor(private router: Router,
              public platform: Platform,
              private auth: AuthService,
              private storage: Storage,
              private managementService:ManagementService) {
                this.platform.backButton.subscribeWithPriority(0, () => {
                  console.log(platform.backButton)
                })
                this.countDown()

                 this.managementService.get_list_produit()
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
    this.router.navigateByUrl('tabs/tabs/categorie')
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
}
