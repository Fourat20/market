import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides} from '@ionic/angular'
import { ManagementService } from 'src/app/services/management.service/management.service';
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

  constructor(private router: Router,
              private managementService:ManagementService) {
                this.countDown()
              }
  ionSlideChange(slides){

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
    this.router.navigateByUrl('categorie')
  }
  get_list_produit(){
    this.managementService.get_list_produit()
  }

  countDown(){
    // Set the date we're counting down to
  var countDownDate = new Date("Jan 29, 2021 15:37:25").getTime();
  
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
