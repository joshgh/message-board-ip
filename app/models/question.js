import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('review', { async: true })
});
