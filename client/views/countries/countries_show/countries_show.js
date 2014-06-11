
/*****************************************************************************/
/* CountriesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CountriesShow.events({
  'submit #countries-form' : function(event, template) {
    event.preventDefault();
    
    var selected = template.findAll("input[type=checkbox]:checked");
    
    console.log(selected);
    
    var array = _.map(selected, function(item) {
     return item.id;
    });
   
    console.log(array);
    
    //Router.go('travels.show', {_ids: array});
  }
});

Template.CountriesShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CountriesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.CountriesShow.created = function () {
};

Template.CountriesShow.rendered = function () {
};

Template.CountriesShow.destroyed = function () {
};


