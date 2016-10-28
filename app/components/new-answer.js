import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerFormIsShowing: false,
  actions: {
    showAnswerForm() {
      this.set('newAnswerFormIsShowing', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.set('newAnswerFormIsShowing', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
