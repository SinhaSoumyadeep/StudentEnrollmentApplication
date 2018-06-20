import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  invalidLogin;
  errMsg;

  login(username, password) {
    console.log([username, password]);

    if(username== undefined || password == undefined)
    {
      this.errMsg = "*feilds cannot be empty"
    }

    if(username!= undefined &&password!= undefined)
    {
      this.service
        .login(username, password)
        .then((response) =>
        {
          console.log(response);
          if(response!=null){
            this.router.navigate(['profile'])
            window.location.replace("/profile")
          }
          else {
            this.invalidLogin = true;
            this.errMsg = "*invalid login"
          }

        }
        );

    }



  }

  constructor(private router: Router,private service: UserServiceClient) { }

  ngOnInit() {


  }

}
