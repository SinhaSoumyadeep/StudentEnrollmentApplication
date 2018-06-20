import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.css']
})
export class SectionEditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: UserServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  section;

  courseId;
  sectionId;
  user: '';
  isAdmin;

  setParams(params) {
    this.courseId = params['courseId']
    this.sectionId = params['sectionId'];
  }


  updateSection(section)
  {
    console.log(section)
    this.service.updateSection(section).then((response)=>{ console.log(response)})
     window.location.replace("/course/"+ this.courseId +"/section");

  }


  ngOnInit() {

    this.service.findSectionsForCourse(this.courseId).then(
      (sections) => {

        const index = sections.map(function(e) { return e._id; }).indexOf(this.sectionId);
        this.section = sections[index];


      }

    )

    this.service.profile().then((user) => {
      this.user = user
      if(user.username == 'admin')
      {
        this.isAdmin = true;
      }

    });



  }


}
