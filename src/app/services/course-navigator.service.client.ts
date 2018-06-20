export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch('https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
