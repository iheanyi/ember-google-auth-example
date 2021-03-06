'use strict';
/* eslint-env node */

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'google-oauth-example',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    torii: {
      providers: {
        'google-oauth2': {
          redirectUri: 'http://localhost:4199/oauth2callback',
          apiKey: '643525147183-a75vsvqbi4j7tr0gl8vjh5t0trfaq7h8.apps.googleusercontent.com'
        },
        'google-oauth2-bearer': {
          redirectUri: 'http://localhost:4199/oauth2callback',
          apiKey: '643525147183-a75vsvqbi4j7tr0gl8vjh5t0trfaq7h8.apps.googleusercontent.com'
        } 
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
