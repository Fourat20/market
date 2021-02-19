import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ManagementService } from 'src/app/services/management.service/management.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  offre_id
  id
  offre_details
  page='Information'
  constructor(private route: ActivatedRoute,
              private router: Router,
              private managementService:ManagementService,
              public platform: Platform,) {
this.route.queryParams.subscribe(params=>{
  this.offre_id=params.id
  // alert(params.id)
  // alert(this.offre_id)
//  alert("managementService"+this.managementService.listOffre);
//  alert("this.listOffre  " +this.offre_id);
this.managementService.idOffre=params.id
this.managementService.get_produit()
this.managementService.get_list_provider()
this.managementService.get_list_produit()
alert("Offre promo:  "+JSON.stringify(this.managementService.Offre.promo))
console.log("Offre promo:  "+JSON.stringify(this.managementService.Offre.promo))

})

// this.platform.backButton.subscribeWithPriority(0, () => {
//   // code that is executed when the user pressed the back button
//   // and ionic doesn't already know what to do (close modals etc...)

//   console.log(platform.backButton)
// })
// alert(this.id)

   }


  async ngOnInit() {
    // await this.managementService.get_produit()
    alert("Offre promo:  "+JSON.stringify(this.managementService.Offre.promo))
    console.log("Offre promo:  "+JSON.stringify(this.managementService.Offre.promo))
    
 
    // alert("this "+JSON.stringify(this.idOffre));
  //  await this.managementService.get_list_produit();
  //  await  this.get_produit_by_id()
  this.countDown()
  }
  //get produit by id
//    get_list_produit(){
//    this.managementService.get_list_produit()
//    this.get_produit_by_id()
//   }
// get_produit_by_id(){
//    console.log(this.managementService.listOffre);
  
//   for(let i; i<4;i++){
//     if(this.managementService.listOffre[i].id==this.offre_id)
//     {
//       console.log("by id "+this.managementService.listOffre.id);
      
//     }
//         }
// }
countDown(){
  // Set the date we're counting down to
var countDownDate = new Date("Jan 31, 2021 23:37:25").getTime();

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

goSeller(i){
  alert(this.managementService.Offre)
  let id:NavigationExtras={
    queryParams:{
      id:this.managementService.listProvider[i]._id
    }
  }

  this.router.navigate(['/tabs/tabs/seller'],id)
}
goInformation(){
this.page="Information"
}
goInformation2(){
  this.page="Information2"
  }
}
