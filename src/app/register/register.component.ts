import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  errMsg;
  validUser = true;
  register(username, password, password2) {
    console.log([username, password, password2]);

    if(username == undefined||password == undefined||password2 == undefined)
    {
      this.errMsg = "fields cannot be empty";
      return
    }
    if(password != password2)
    {
      this.errMsg = "passwords donot match";
      return
    }


    this.service.findAllUsers().then(
      (users) =>{

        users.map((user)=>{

          if(user.username == username)
          {
            this.errMsg = "username already taken";
            this.validUser = false
          }

        })



      }
    ).then(
      ()=>{

        if(this.validUser){
          this.service
            .createUser(username, password)
            .then(() =>
              this.router.navigate(['profile']));
          window.location.replace('/profile');
        }

      }
    )

    this.validUser = true

  }

  ngOnInit() {
  }

}
