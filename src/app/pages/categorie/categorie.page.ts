import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {
  value='Vetement'
  constructor() { }

  ngOnInit() {
  }

  go_Maison(){
    this.value='Maison';
    console.log(" this.value "+  this.value)
  }
  go_Vetement(){
    this.value='Vetement';
    console.log(" this.value "+  this.value)
  }
  go_Electronique(){
    this.value='Electronique';
    console.log(" this.value "+  this.value)
  }
}
