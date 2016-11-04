import Ember from 'ember';
import moment from 'moment';

export function prettyTimestamp(params/*, hash*/) {
  let timestamp = params[0];
  if(timestamp){
    return moment(timestamp).calendar();
  } else {
    return "unknown timestamp";
  }

}

export default Ember.Helper.helper(prettyTimestamp);
