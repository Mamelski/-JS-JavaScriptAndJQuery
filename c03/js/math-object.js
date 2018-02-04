// Create a variable to hold a random number between 0 and 10
var randomNumber = Math.floor((Math.random() * 10));

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');
// Write the number into that element
el.innerHTML = '<h2>random number</h2><p>' + randomNumber + '</p>';
