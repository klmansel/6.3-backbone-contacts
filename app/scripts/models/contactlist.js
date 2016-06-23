var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  defaults: {
    'first-name': 'first-name',
    'last-name' : 'last-name',
    'phone': 'no phone number',
    'email': 'no email',
  }
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mycontacts',
  parse: function(results){
    return data.results;
  }
});

module.exports = {
  'ContactCollection' : ContactCollection,
  'Contact' : Contact
};
