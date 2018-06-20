export class CourseServiceClient {
  COURSE_URL = 'https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
  findloggedInUser() {
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }
}
