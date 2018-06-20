import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TopicsServiceClient} from "../services/topics.service.client";

@Component({
  selector: 'app-topics-card',
  templateUrl: './topics-card.component.html',
  styleUrls: ['./topics-card.component.css']
})
export class TopicsCardComponent implements OnInit {

  constructor(private service: TopicsServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topics = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadTopics( this.lessonId );
  }

  loadTopics(lessonId) {
    this.lessonId = lessonId;
    this.service.findTopicsForLesson(lessonId)
      .then(topics => this.topics = topics);

  }
  ngOnInit() {
  }

}
