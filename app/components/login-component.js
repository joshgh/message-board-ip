import Ember from 'ember';

export default Ember.Component.extend({
  user: Ember.inject.service(),
  actions: {
    login(){
      this.get('user').login(this.get('name'));
      this.set('name', "");
    },
    logout(){
      this.get('user').logout();
    }
  }
});
