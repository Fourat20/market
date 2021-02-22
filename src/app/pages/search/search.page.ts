import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service/management.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private managementService:ManagementService) { 
    console.log("res from search  "+JSON.stringify(this.managementService.listProvider))
  }

  ngOnInit() {
  }

}
