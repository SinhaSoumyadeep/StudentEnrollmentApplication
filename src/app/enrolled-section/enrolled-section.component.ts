import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {CourseServiceClient} from "../services/course.service.client";
import {Router} from "@angular/router";
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-enrolled-section',
  templateUrl: './enrolled-section.component.html',
  styleUrls: ['./enrolled-section.component.css']
})
export class EnrolledSectionComponent implements OnInit {

  constructor(private router: Router,private service: UserServiceClient,private courseservice: CourseServiceClient) { }

  user: User = new User();
  sections = [];
  isLoggedIn;
  unenroll(id) {

    this.service.unenrollStudentInSection(id).then((response)=> {
      console.log(response)
      window.location.reload()

    })




  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.user = user);

    this.courseservice.findloggedInUser().then(user => {
      this.user = user;
      if(user.username != '')
      {
        this.isLoggedIn = true;
      }
    });

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
