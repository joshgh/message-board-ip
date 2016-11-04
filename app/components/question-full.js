import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
    downvote(answer) {
      this.sendAction('downvote', answer);
    }
  }
});
