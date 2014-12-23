import DS from "ember-data";

var Coffee = DS.Model.extend({
  name:       DS.attr('string'),
  location:   DS.attr('string'),
  type:       DS.attr('string'),
  price:      DS.attr('number')
});


Coffee.reopenClass({
  FIXTURES: [
  {
    id: 1,
    name: 'Nova',
    location: 'Denver',
    type: 'Dark',
    price: 10},
  {
    id: 2,
    name: 'Black Eye',
    location: 'Denver',
    type: 'Light',
    price: 5},
  {
    id: 3,
    name: 'Starbucks',
    location: 'Indianapolis',
    type: 'Medium',
    price: 7},
  {
    id: 4,
    name: 'Dogwood',
    location: 'Minneapolis',
    type: 'Dark',
    price: 12}
  ]
});

export default Coffee;
