import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    openLeftPanel(){
      Ember.$(".panel-left").addClass('active');
      Ember.$(".panel-left").css('display','block ');
    }
  }
});
