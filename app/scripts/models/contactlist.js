var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  defaults: {
    'name': '',
    'phone': '',
    'email': ''
  }
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/karascontacts'
});

module.exports = {
  'Contact': Contact,
  'ContactCollection': ContactCollection
};
