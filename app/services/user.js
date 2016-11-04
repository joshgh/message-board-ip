import Ember from 'ember';

export default Ember.Service.extend({
  userName: null,
  login(user) {
    this.set('userName', user);
  },
  logout() {
    this.set('userName', null);
  }
  
});
