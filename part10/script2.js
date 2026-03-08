'use strict'

//passing arguments by value/by reference
 

//Javascript does not have pass by reference, only pass by value.
const flight = 'LH234';
const jonas = {
    name: 'jonas',
    passport: '230495867'
};

const checkIn = function (flightNumber, passenger) {
    flightNumber = 'LH999'
    passenger.name = 'Mr ' + passenger.name; //same object as jonas in the memory heap.
    
    if (passenger.passport === 230495867) {
        console.log('Checked in');
    } else {
        console.log('wrong passport!');
    }
};

//passing a primitive, the value is copied


// when you pass an obj as argument, what is passed is actually the reference to the object in the memory heap.
checkIn(flight, jonas);
console.log(flight, jonas);



const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000);

};


//two functions manipulating the same object
newPassport(jonas);
checkIn(flight,jonas) //wrong passport 