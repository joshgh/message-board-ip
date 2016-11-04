import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionFormIsShowing: false,
  actions :{
    showEditForm() {
      this.set('editQuestionFormIsShowing', true);
    },
    updateQuestion(question) {
      var params = {
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('editQuestionFormIsShowing', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
