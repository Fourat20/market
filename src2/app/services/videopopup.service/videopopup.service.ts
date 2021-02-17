import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideopopupService {

  private videoData=[
    {
      url:'https://www.youtube.com/embed/5rTy4oouj4c',
      images:'../../assets/game/game.png'
    }
  ]

  constructor() { }

  getvideos(){
    return this.videoData;
  }
}
