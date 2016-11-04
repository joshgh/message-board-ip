import Ember from 'ember';

export default Ember.Component.extend({
  user: Ember.inject.service(),
  originalPoster: Ember.computed('user.userName', 'question', function() {
    if (this.get('user').get('userName') === this.get('question').get('author')) {
      return true;
    } else {
      return false;
    }
  }),
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
