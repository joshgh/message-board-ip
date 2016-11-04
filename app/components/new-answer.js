import Ember from 'ember';

export default Ember.Component.extend({
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
        author: this.get('author') || "anonymous",
        content: this.get('content') || "",
        question: this.get('question') || "",
        score: 0,
        timestamp: new Date().toISOString()
      };
      this.set('author', "");
      this.set('content', "");
      this.set('newAnswerFormIsShowing', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
