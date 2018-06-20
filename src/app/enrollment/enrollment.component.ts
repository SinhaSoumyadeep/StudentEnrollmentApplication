import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {CourseServiceClient} from "../services/course.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: UserServiceClient,private courseservice: CourseServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }


  enrollments = [];

  courseId;
  sectionId;
  user: '';
  isAdmin;

  setParams(params) {
    this.courseId = params['courseId'];
    this.sectionId = params['sectionId'];
  }


  ngOnInit() {
    this.service
      .profile()
      .then((user) => {
        this.user = user
        if(user.username == 'admin')
        {
          this.isAdmin = true;
        }

      });

    this.service.findEnrollmentForSection(this.sectionId).then((enrollment) => {
      this.enrollments = enrollment;
      console.log(enrollment[1].student)
    })





    // this.service
    //   .findUserById('5b1ec6c2d06a450655254f14')
    //   .then(user => this.user = user);
  }

}
