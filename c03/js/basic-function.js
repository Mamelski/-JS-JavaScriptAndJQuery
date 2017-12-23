// Create a variable called msg to hold a new message
var message = 'Sign up to receive our newsletter for 10% off!';

// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  var element = document.getElementById('message');
  element.textContent = message;
}

// Call the function
updateMessage();
