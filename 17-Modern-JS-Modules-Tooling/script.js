/*
// Importing module

// import {
//   addToCart,
//   totalPrice as price,
//   //   totalQuantity,
//   tq,
// } from './shoppingCart.js';
// addToCart('bread', 5);
// // console.log(totalPrice, totalQuantity);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// import add from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 2);

console.log(cart);


const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost  is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2); // private
console.log(ShoppingCart2.shippingCost); // undefined
*/

// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
        `${quantity} ${product} added to cart (shipping cost  is ${shippingCost})`
    );
};

// Import
const {addToCart} = require('./shoppingCart.js');