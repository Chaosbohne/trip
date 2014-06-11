CountriesShowController = RouteController.extend({
  waitOn: function () {
    return [Meteor.subscribe('countries')];
  },

  countries: function() {
    return Countries.find({});
  },  
  
  data: function () {
    return {
      countries: this.countries()
    };
  },
  
  action: function () {
    this.render();
  }
});
