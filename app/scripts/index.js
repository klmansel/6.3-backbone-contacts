var $ = require('jquery');
var ContactCollection = require('./models/contactlist').ContactCollection;
var ContactFormView = require('./views/contactlist').ContactFormView;
var ContactListView = require('./views/contactlist').ContactListView;

console.log('ContactCollection', ContactCollection);

var contacts = new ContactCollection();

var contactForm = new ContactFormView({collection: contacts});
$('.app').append(contactForm.render().el);

var contactList = new ContactListView({collection: contacts});
$('.app').append(contactList.render().el);

contacts.fetch();
