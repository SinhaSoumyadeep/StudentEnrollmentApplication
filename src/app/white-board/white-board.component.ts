import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient) {}
  user: '';
  isLoggedIn;

  ngOnInit() {
    this.service.profile().then(user => {
      this.user = user;
      if(user.username != '')
      {
        this.isLoggedIn = true;
      }
    })
  }

}
