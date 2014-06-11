TravelsShowController = RouteController.extend({
  waitOn: function () {
    console.log(this.params._ids);
    
    return [Meteor.subscribe('travels', this.params._ids)];
  },

  travels: function() {
    return Travels.find({});
  },
  
  data: function () {
    return {
      travels: this.travels()
    };    
  },

  action: function () {
    this.render();
  }
});
