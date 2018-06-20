export class TopicsServiceClient {
  findTopicsForLesson(lessonId) {
    return fetch('https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/lesson/' + lessonId)
      .then(response => response.json());
  }
}
