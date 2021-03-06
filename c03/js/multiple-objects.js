// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.getNumberOfAvailableRooms = function() {
    return this.rooms - this.booked;
  };
}


// Create two hotel objects
var quayHotel = new Hotel('Hotel pierwszy', 40, 25);
var parkHotel = new Hotel('Hotel drugi', 120, 77);


// Update the HTML for the page
var details1 = quayHotel.name + ' rooms available: ';
    details1 += quayHotel.getNumberOfAvailableRooms();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms available: ';
    details2 += parkHotel.getNumberOfAvailableRooms();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21 and 26, but note the security issues on p228-231
*/
