import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

export default ToriiAuthenticator.extend({
  torii: Ember.inject.service(),
  authenticate(options) {
    return this._super(options).then(function (data) {
      console.log(data);
        alert(`authorizationCode:\n${data.authorizationCode}\nprovider: ${data.provider}\nredirectUri: ${data.redirectUri}`);
      });
  },
  fetch(data) {
    console.log(data);
    return data;
  }
});
