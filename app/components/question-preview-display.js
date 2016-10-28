import Ember from 'ember';

export default Ember.Component.extend({
  questionSort: ['score:desc'],
  rankedQuestions: Ember.computed.sort('questions', 'questionSort'),
});
