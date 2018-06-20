import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {CourseServiceClient} from "../services/course.service.client";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router,private service: UserServiceClient,private courseservice: CourseServiceClient) { }

  user: User = new User();
  sections = [];




  update(user: User) {
    console.log(user);
    this.service
      .updateUser(user).then((response) => { console.log(response);
      window.location.reload()})


  }

  logout()
  {

    this.service.logout().then((response)=>{window.location.replace("/home");})


  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user);

    this.service
      .findSectionsForStudent()
      .then((sections) => {

      console.log(sections)
       sections.map((section) => {

         if(section.section == null){

           return
         }


          this.courseservice.findCourseById(section.section.courseId)
            .then((response) => {

              console.log("the index of the"+this.sections.indexOf(section._id))
              var sectionObj = {section: section.section, course: response}
              console.log(sectionObj)
                this.sections.push(sectionObj)




            })


        })

        console.log(this.sections)
      });



    // this.service
    //   .findUserById('5b1ec6c2d06a450655254f14')
    //   .then(user => this.user = user);
  }

}
