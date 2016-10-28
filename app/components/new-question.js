import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionFormIsShowing: false,
  actions: {
    showForm() {
      this.set('newQuestionFormIsShowing', true);
    },
    hideForm() {
      this.set('newQuestionFormIsShowing', false);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') || "anonymous",
        content: this.get('content') || "",
        notes: this.get('notes') || "",
        score: 0
      };
      this.set('author', "");
      this.set('content', "");
      this.set('notes', "");
      this.set('newQuestionFormIsShowing', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
