import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementService } from 'src/app/services/management.service/management.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.page.html',
  styleUrls: ['./seller.page.scss'],
})
export class SellerPage implements OnInit {
  id_provider
  user = {
    name: 'Cosima Niehaus',
    profileImage: '../../../assets/seller/avatar.jpg',
    coverImage: '../../../assets/seller/zara.jpg',
    occupation: 'Clothes',
    location: 'Tunisia mall',
    description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
    address: 'Tunisia mall, Lac2, Tunis',
    phone: '555 555 555',
    email: 'contact@zara.com',
    whatsapp: '555 555 555',
  };
  constructor(private route: ActivatedRoute,
              private managementService:ManagementService) {

    this.route.queryParams.subscribe(params=>{
      this.id_provider=params.id
         
     alert(" this.id_provider  "+ this.id_provider)
    //  alert(" this.id_provider  "+ this.managementService.listProvider[1]._id)
     })

     this.managementService.get_list_provider()
   }

  ngOnInit() {
  }

}
