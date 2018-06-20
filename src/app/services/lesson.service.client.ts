export class LessonServiceClient {
  findLessonsForModule(moduleId, courseId) {
    return fetch('https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/course/' + courseId + '/module/' + moduleId)
      .then(response => response.json());
  }
}
