var basket = require("../shopping_basket");
var shop = require("../shop");
var assert = require("chai").assert;

describe("Basket", function(){

  it("Should have no items at start", function() {
    assert.deepEqual([], basket.items);
  });

  it("Can add item to basket", function() {
    basket.add(shop[0]);
    assert.deepEqual([{item: "milk", price: 1}], basket.items);
  });

  it("Can remove item from basket", function() {
    basket.remove(shop[0]);
    assert.deepEqual([], basket.items);
  });

  it("Should calculate the price of shopping basket", function() {
    basket.add(shop[0]);
    basket.add(shop[1]);
    assert.equal(3.50, basket.price());
  });

  it("Should get 10% discount for over 20", function() {
    basket.remove(shop[0]);
    basket.remove(shop[1]);
    basket.add(shop[5]);
    basket.add(shop[8]);
    assert.equal(20.25, basket.price());
  });

  it("Should get 5% discount with card", function() {
    assert.equal(19.24, basket.price(true));
    basket.remove(shop[5]);
    basket.remove(shop[8]);
    basket.add(shop[0]);
    basket.add(shop[1]);
    assert.equal(3.32, basket.price(true))

  });

});
