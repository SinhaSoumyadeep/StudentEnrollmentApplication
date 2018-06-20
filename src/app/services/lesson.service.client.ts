export class LessonServiceClient {
  findLessonsForModule(moduleId, courseId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId)
      .then(response => response.json());
  }
}
