export class TopicsServiceClient {
  findTopicsForLesson(lessonId) {
    return fetch('http://localhost:8080/api/lesson/' + lessonId)
      .then(response => response.json());
  }
}
