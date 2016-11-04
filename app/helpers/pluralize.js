import Ember from 'ember';

export function pluralize(params) {
  let value = params[0];
  if (value !== 1) {
    return 's';
  }
}

export default Ember.Helper.helper(pluralize);
