PlumpBustle.ApplicationController = Ember.Controller.extend({
  isSocialMenuShowing: false,
  actions: {
    showSocialMenu: function() {
      this.set('isSocialMenuShowing', true);
    },
    hideSocialMenu: function() {
      this.set('isSocialMenuShowing', false);
    }
  }
});
