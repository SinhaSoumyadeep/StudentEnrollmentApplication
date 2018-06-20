export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch('http://localhost:8080/api/widget/' + topicId)
      .then(response => response.json());
  }
}
