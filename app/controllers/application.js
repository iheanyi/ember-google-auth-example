import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    login() {
      console.log("Logging in user!");
      this.get('session').authenticate('authenticator:torii', 'google-oauth2-bearer').then((response) => {
        console.log("Auth response");
        console.log(response);
      });
    }
  }
});
