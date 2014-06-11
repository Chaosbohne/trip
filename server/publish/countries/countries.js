/*****************************************************************************/
/* CountriesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('countries', function () {
  // you can remove this if you return a cursor
  return Countries.find();
});
