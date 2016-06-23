var model = require('./models/contactlist');
var view = require('./views/contactlist');
var $ = require('jquery');

var contactItem = new model.ContactCollection();
console.log(contactItem);


var description = new view.ContactDescView();
$('.app').append(description.render().el);

var contactList = new view.ContactListView();
$('.app').append(contactList.render().el);

contactItem.add([
  {'first-name': 'Kara', 'phone':'803-290-8121'},
  {'first-name': 'Deshler', 'last-name': 'Mansel', 'email': 'hismail@hismail.com'},
  {'first-name': 'Zariya', 'last-name':'Mansel','phone': '864-238-3683'}

]);
console.log(contactItem.models[2]);//logs third item in list, but inside object under
//attributes
