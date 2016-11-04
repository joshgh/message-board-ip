import Ember from 'ember';

export default Ember.Component.extend({
  user: Ember.inject.service(),
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
        author: this.get('user').get('userName'),
        content: this.get('content') || "",
        notes: this.get('notes') || "none",
        score: 0,
        timestamp: new Date().toISOString()
      };
      this.set('content', "");
      this.set('notes', "");
      this.set('newQuestionFormIsShowing', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
