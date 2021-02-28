import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(   private auth: AuthService,) { }

  ngOnInit() {
  }

}
