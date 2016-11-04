import Ember from 'ember';

export default Ember.Component.extend({
  numAnswers: Ember.computed('question', function() {
    return this.get('question').get('answers').get('length');
  })
});
