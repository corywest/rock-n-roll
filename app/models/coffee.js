import DS from "ember-data";

App.Coffee = DS.Model.extend({
  location:   DS.attr('string'),
  type:       DS.attr('string'),
  price:      DS.attr('number')
});

export default DS.Model.extend({});
