import Ember from "ember";

var CoffeeRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('coffee');
  }
});

export default CoffeeRoute;
