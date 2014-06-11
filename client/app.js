/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/

//App namespace, for client only functions
_.extend(App, {
});

//App namespace, for helpers
App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});
