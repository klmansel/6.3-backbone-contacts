var Backbone = require('backbone');
var template = require('../templates/contacts.hbs');


var ContactDescView = Backbone.View.extend({
  tagName: 'h2',
  attributes: {
    'class': 'description'
  },

  render: function(){
    this.$el.text('Here is a list of important people you know:');
    return this;
  }
});

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'contact-list',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderContactItem);
  },

  render: function(){
    return this;
  },

  renderContactItem: function(){
    var contactItem = new ContactListView({model: Contact});
    this.$el.append(contactItem.render().el);
  }

});

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'each-contact',

  render: function(){
    var context = this.model.toJSON();
    var renderedHTML = this.template(context);

    this.$el.html(renderedHtml);
    return this;
  }

});

module.exports = {
  'ContactDescView' : ContactDescView,
  'ContactListView' : ContactListView,
  'ContactItemView' : ContactItemView

};
