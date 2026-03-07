'use strict'

//default parameters


const bookings = [];
const createBooking = function (flightNumber, numPassengers=1, price=70*numPassengers) {
    
    //ES5 way for default values
    // numPassengers = numPassengers || 1;
    // price = price || 1;

    const booking = {
        flightNumber,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking)
};

createBooking('LH123');
createBooking('LH123', 53);

// setting a parameter to undefined is the same as not even setting it.so when you dont pass an argument into that parameter then it will take the value of undefined.
//so here the numberofpassengers will be 1
createBooking('LH123',undefined,1000)