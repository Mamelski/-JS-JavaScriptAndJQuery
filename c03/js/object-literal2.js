// Set up the object
var hotel = {
  name : 'Park',
  rooms : 120,
  booked : 77,
  roomsAvailable : function() {
    return this.rooms - this.booked; // Need "this" because inside function
  }
};

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('roomsLeft');    // Get element
elRooms.textContent = hotel.roomsAvailable();   // Update HTML with property of the object

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/
