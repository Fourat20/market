import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {
  iterested
  constructor() { }

  ngOnInit() {
  }
  selected(iterested){
    console.log("iterested "+iterested);
    
  }
}
