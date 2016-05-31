var _ = require("lodash");

var shoppingBasket = {

  items: [],
  add: function (item) {
    this.items.push(item);
  },
  remove: function(item) {
    this.items.splice(item, 1);
  }, 
  countItem: function(itemToCount) {
    var count = 0;
    for(var item of this.items) {
      if(item === itemToCount) {
        count += 1;
      }
    }
    return count;
  },
  bogof: function(bogofItems) {
    var bogofToPay = [];
    for(var bogofItem of _.uniq(bogofItems)) {
      var count = this.countItem(bogofItem);
      var newPrice = bogofItem["price"] * _.round(count/2);
      bogofToPay.push({item: bogofItem["item"], price: newPrice});
    }
    return bogofToPay;
  },
  price: function(card) {
    var totalPrice = 0;
    var bogofItems = [];
    for(var item of this.items) {
      if(item["bogof"] === true) {
        bogofItems.push(item);
      }
    }
    newItems = this.bogof(bogofItems);
    for(var item of bogofItems) {
      this.items.splice(item, 1)
    }
    this.items.push(newItems);
     this.items = _.flatten(this.items);
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
  }
}

module.exports = shoppingBasket;


// totalPrice = Math.round(totalPrice * 100);
// return totalPrice / 100;