import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
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
