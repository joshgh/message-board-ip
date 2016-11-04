import Ember from 'ember';

export default Ember.Component.extend({
  answerSort: ['score:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'answerSort'),
  actions: {
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
    downvote(answer) {
      this.sendAction('downvote', answer);
    }
  }
});
