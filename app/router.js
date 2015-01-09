import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('posts', function(){
    this.route('post', { path: '/:post_id' });
  });

  this.resource('about');
  this.resource('contact');

  this.resource('coffee', function() {
    this.route('location');
    this.route('type');
    this.route('price');
    this.route('name');
  });
});

export default Router;
