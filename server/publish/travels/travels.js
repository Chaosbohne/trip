/*****************************************************************************/
/* TravelsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('travels', function (countryIds) {
  // you can remove this if you return a cursor
  return Travels.find();
});
