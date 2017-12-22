// Create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = false;

// Get the element that has an id of stock
var elStock = document.getElementById('isInStock');
// Set class name with value of inStock variable
elStock.className = inStock;

// Get the element that has an id of shipping
var elShip = document.getElementById('isShipping');
// Set class name with value of shipping variable
elShip.className = shipping;
