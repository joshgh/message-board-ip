import Ember from 'ember';
import moment from 'moment';

export function prettyTimestamp(params/*, hash*/) {
  let timestamp = params[0];
  return moment(timestamp).calendar();
}

export default Ember.Helper.helper(prettyTimestamp);
