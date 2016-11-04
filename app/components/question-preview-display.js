import Ember from 'ember';

export default Ember.Component.extend({
  questionSort: ['timestamp:desc'],
  sortedQuestions: Ember.computed.sort('questions', 'questionSort'),
});
