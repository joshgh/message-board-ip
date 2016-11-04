import Ember from 'ember';

export default Ember.Component.extend({
  name: "",
  user: Ember.inject.service(),
  isInvalid: Ember.computed('name', function() {
    let patt = /^$|^\s+$/;
    return patt.test(this.get('name'));
  }),
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
