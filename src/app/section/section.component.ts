import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModuleServiceClient} from "../services/module.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from '../models/coruse.model.client';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: UserServiceClient, private courseService: CourseServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  sections = [
  ];
  course: Course = new Course();

  courseId;
  user: '';
  isAdmin;

  setParams(params) {
    this.courseId = params['courseId'];
  }
  addSection(sectionTitle) {
    const largestId = Math.max.apply(
      Math, this.sections.map(
        function(section){
          return section.id;
        }))
    this.sections.push(
      {name: sectionTitle, id: largestId + 1, seats: 2, errMsg: ''}
    );
    this.service.createSection(sectionTitle, 2, this.courseId)
      .then((response)=>{console.log(response)}).then(()=>{
      window.location.replace("/course/"+ this.courseId +"/section")
    })




  }
  enroll(id) {


    const index = this.sections.map(function(e) { return e._id; }).indexOf(id);
    if ( this.sections[index].seats === 0) {
      this.sections[index].errMsg = " sorry no seats available"
      return;
    }
    this.service.enrollStudentInSection(id).then(
      (response) => {

        console.log(response)
      }

    ).then(()=>{
      window.location.replace("/course/"+ this.courseId +"/section")
    })


  }

  delete(id){
    this.service.deleteSection(id).then(
      (response) => {
        window.location.replace("/course/"+ this.courseId +"/section")


      }
    )

  }





  ngOnInit() {

    this.service.findSectionsForCourse(this.courseId).then(
      (sections) => {

        this.sections = sections;
      }

    )

    this.service.profile().then((user) => {
      this.user = user
      if(user.username == 'admin')
      {
        this.isAdmin = true;
      }

    });

    this.courseService.findCourseById(this.courseId).then((course) => { this.course = course})



  }

}
