import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.page.html',
  styleUrls: ['./pub.page.scss'],
})
export class PubPage implements OnInit {

  constructor(private router: Router,) { 
    this.delay(5000)
    this.router.navigate(['/tabs/tabs/home'])
  }

  ngOnInit() {
  }
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
