import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagementService } from 'src/app/services/management.service/management.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
offre_id
offre_details
  constructor(private route: ActivatedRoute,
              private router: Router,
              private managementService:ManagementService) {
this.route.queryParams.subscribe(params=>{
 this.offre_id=params.id
    console.log(params.id);
  
 
})
   }

  async ngOnInit() {
   await this.managementService.get_list_produit();
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
var countDownDate = new Date("Jan 20, 2021 15:37:25").getTime();

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
