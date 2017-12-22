// Create variables and assign them values
var inStock = true;
var shipping= false;
/* Some other processing might go here and, as a result, the script might need to change these values. */

inStock = false;
shipping = true;
// Get the element with an id of stock
var elStock = document.getElementById('isInStock');
// Set class name with value of inStock variable
elStock.className = inStock;
// Get the element with an id of shipping
var elShip = document.getElementById('isShipping');
// Set class name with value of shipping variable
elShip.className = shipping;
