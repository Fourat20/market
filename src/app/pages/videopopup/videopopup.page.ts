import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-videopopup',
  templateUrl: './videopopup.page.html',
  styleUrls: ['./videopopup.page.scss'],
})
export class VideopopupPage implements OnInit {
@Input()
urlSafe:SafeResourceUrl;

  constructor( private modalController: ModalController,
               private sanitizer: DomSanitizer,
               ) { 
                
                    
               }
passurl: string;

  ngOnInit() {
    this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.passurl)
    console.log(`${this.passurl}`);
    
  }

  

}
