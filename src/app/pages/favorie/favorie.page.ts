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
       console.log("fav " +JSON.stringify(res) );
       console.log("fav " +JSON.stringify(this.favorieArr[0].fav) );
       console.log("fav " +JSON.stringify(this.favorieArr[1].fav) );
       console.log("fav " +JSON.stringify(this.favorieArr[2].fav) );
       console.log("fav " +JSON.stringify(this.favorieArr[3].fav) );
    });
  }
}
