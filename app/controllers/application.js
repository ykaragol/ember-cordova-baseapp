import Ember from 'ember';

export default Ember.Controller.extend({
  applicationHeader:'Child Tube',

  actions:{
    openLeftPanel(){
      Ember.$(".sidenav").css('width','100%');
    },

    closeLeftPanel(){
      Ember.$(".sidenav").css('width','0%');
    }
  }
});
