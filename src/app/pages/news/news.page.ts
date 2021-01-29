import { Component, OnInit } from '@angular/core';

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
    },
    {
      imageUrl: '../../../assets/article/voiture.jpg',
      title: 'Asus',
      subtitle: 'description',
      reduction:'30%',
    },
    {
      imageUrl: '../../../assets/article/voiture.jpg',
      title: 'Voiture',
      subtitle: 'description',
      reduction:'10%',
    },
    {
      imageUrl: '../../../assets/article/voiture.jpg',
      title: 'Voiture',
      subtitle: 'description',
      reduction:'50%',
    }];
    favorie=0
  constructor() { }

  ngOnInit() {
  }
  cardTapped(card) {
    alert(card.title + ' was tapped.');
  }
  fav(){
    this.favorie=1
  }
}
