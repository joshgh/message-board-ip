import Ember from 'ember';

export default Ember.Component.extend({
  content: "",
  user: Ember.inject.service(),
  newQuestionFormIsShowing: false,
  isInvalid: Ember.computed('content', function() {
    let patt = /^$|^\s+$/;
    return patt.test(this.get('content'));
  }),
  actions: {
    showForm() {
        this.set('newQuestionFormIsShowing', true);
    },
    hideForm() {
      this.set('content', "");
      this.set('notes', "");
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
