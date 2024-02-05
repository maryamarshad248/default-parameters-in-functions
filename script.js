'use strict';

const bookings = [];
const createbooking = function (
  flightNumber,
  numPassengers = 2,
  price = 3 * numPassengers
) {
  // ES5
  //numPassengers = numPassengers || 2;
  //price = price || 1000;
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createbooking('LH123');
createbooking('LH123', 2, 600);
createbooking('LH123', 200);
createbooking('LH123', 35);

createbooking('LH123', undefined, 388);
