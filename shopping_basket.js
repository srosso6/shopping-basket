var _ = require("lodash");

var shoppingBasket = {

  items: [],
  add: function (item) {
    this.items.push(item);
  },
  remove: function(item) {
    this.items.splice(item, 1);
  },
  price: function(card) {
    var totalPrice = 0;
    for(var item of this.items) {
      totalPrice += item["price"]
    }
    if(totalPrice > 20) {
      totalPrice = totalPrice * 0.90;
    }
    if(card) {
      totalPrice = totalPrice * 0.95;
    }
    return _.round(totalPrice, 2);
    // totalPrice = Math.round(totalPrice * 100);
    // return totalPrice / 100;
  }
}

module.exports = shoppingBasket;


// bogof 
// need to assign an item as bogof
// first item is full price - how do i know if first one?
// second item is free
