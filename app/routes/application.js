import Ember from 'ember';



export default Ember.Route.extend({

  splashScreenService: Ember.inject.service('device/splashscreen'),

  beforeModel() {
    this.get('splashScreenService').show();
  },

  model(){
    return 'selam';
  },

  afterModel() {
    this.get('splashScreenService').hide();
  }
});
