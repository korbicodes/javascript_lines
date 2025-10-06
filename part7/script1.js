'use strict';
//regular vs arrow functions

//not a code block, an object literal.
//need to notice when using varibles declared with var as they create properties in the global object
var firstName = 'alessia';


//never use an arrow funciton as a method
const alessia = {
    firstName: 'Alessia',
    year: 1993,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);

        const isMillenial = function () {
            console.log(this);  //undefined -> it's regular function even though is inside a method
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hello ${this.firstName}`);  //hello undefined, uses this keyword from global scope, window object, so there is no firstName in the global object.
    }
};

alessia.calcAge();
alessia.greet();


//another pitfall
// even though a function happens to be inside a method the 'this' keyword will be undefined because it will be just a regular function 
// 2 solutions: use an extra var called self