import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionFormIsShowing: false,
  actions: {
    showForm() {
      this.set('newQuestionFormIsShowing', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
