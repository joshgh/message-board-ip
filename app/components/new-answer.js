import Ember from 'ember';

export default Ember.Component.extend({
  user: Ember.inject.service(),
  newAnswerFormIsShowing: false,
  actions: {
    showAnswerForm() {
      this.set('newAnswerFormIsShowing', true);
    },
    hideForm() {
      this.set('newAnswerFormIsShowing', false);
    },
    saveAnswer() {
      var params = {
        author: this.get('user').get('userName'),
        content: this.get('content') || "",
        question: this.get('question') || "",
        score: 0,
        timestamp: new Date().toISOString()
      };
      this.set('content', "");
      this.set('newAnswerFormIsShowing', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
