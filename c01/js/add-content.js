var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Dobry wieczór!';
} else if (hourNow > 0) {
    greeting = 'Dzień dobry!';
} else {
    greeting = 'Witaj!';
}

document.write('<h3>' + greeting + '</h3>');
