import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.page.html',
  styleUrls: ['./favorie.page.scss'],
})
export class FavoriePage implements OnInit {
  favorieArr
  constructor( private storage: Storage,) {
    this. getFav()
   }

  ngOnInit() {
    this. getFav()
  }


  getFav(){
    this.storage.get("favorie").then((res) => {
      this.favorieArr=res
       alert("The session TOKEN value is " +JSON.stringify(res) );


    });
  }
}
