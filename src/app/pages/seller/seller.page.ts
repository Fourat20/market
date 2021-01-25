import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.page.html',
  styleUrls: ['./seller.page.scss'],
})
export class SellerPage implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
