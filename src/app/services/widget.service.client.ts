export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch('https://webdev-summer1-2018-sinha-sou.herokuapp.com/api/widget/' + topicId)
      .then(response => response.json());
  }
}
