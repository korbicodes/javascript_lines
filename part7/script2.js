'use strict';

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};



//does not create a new object in the heap, its just the same reference as jessica.
const youngerJessica = jessica;
youngerJessica.age = 25;


console.log(jessica);  //25
console.log(youngerJessica); //25