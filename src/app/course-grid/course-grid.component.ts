import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses: Course[] = [];
  user: {};
  isLoggedIn;

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
    this.service.findloggedInUser().then(user => {
      this.user = user;
      if(user.username != '')
      {
        this.isLoggedIn = true;
      }
    });
  }

}
