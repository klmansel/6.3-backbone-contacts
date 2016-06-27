var Backbone = require('backbone');
var template = require('../../templates/contactlist.hbs');
var formTemplate = require('../../templates/contactform.hbs');
var $ = require('jquery');

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  template: template,

  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));
    return this;
  }
});

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'form-results col-md-4 col-md-offset-2',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderItem);
  },

  render: function(){
    return this;
  },

  renderItem: function(contact){
    var contactItem = new ContactItemView({model: contact});
    this.$el.append(contactItem.render().el);
  }
});



var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'contact-form col-md-4',
  template: formTemplate,
  events: {
    'submit': 'addContact'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },
  addContact: function(event){
    event.preventDefault();
    this.collection.create({
      email: $('#email').val(),
      name: $('#name').val(),
      phone: $('#phone').val()
    });
    this.clear({
      email: $('#email').val(),
      name: $('#name').val(),
      phone: $('#phone').val()
    });
  }
});

module.exports = {
  'ContactItemView': ContactItemView,
  'ContactListView': ContactListView,
  'ContactFormView': ContactFormView
};
