import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service/management.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  cards = [
    {
      imageUrl: '../../../assets/article/pc1.jpg',
      title: 'Asus',
      subtitle: 'description',
      reduction:'20%',
      favorie:'0',
      icon:'../../../assets/article/seal2.png'
    },
    {
      imageUrl: '../../../assets/article/voiture.jpg',
      title: 'Asus',
      subtitle: 'description',
      reduction:'30%',
      favorie:'0',
      icon:'../../../assets/article/seal.png'
    },
    {
      imageUrl: '../../../assets/article/voiture.jpg',
      title: 'Voiture',
      subtitle: 'description',
      reduction:'10%',
      favorie:'0',
      icon:'../../../assets/article/seal2.png'
    },
    {
      imageUrl: '../../../assets/article/voiture.jpg',
      title: 'Voiture',
      subtitle: 'description',
      reduction:'50%',
      favorie:'0',
      icon:'../../../assets/article/seal.png'
    }];
     favorie=0
    icon:'../../../assets/article/seal2.png'
  constructor( private managementService:ManagementService) {
    this.managementService.get_list_produit()
   }

  ngOnInit() {
  }
  cardTapped(card) {
    alert(card.title + ' was tapped.');
  }
  fav(){
    this.favorie=1
    alert(this.favorie)
  }
}
