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

        //solution 1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self); //self is declared in the par scope hence self is this
        //     console.log(self.year >= 1981 && self.year <= 1996) //true
        // }
        // isMillenial();



        //solution 2
        const isMillenial = () => {
            console.log(this); //self is declared in the par scope hence self is this
            console.log(this.year >= 1981 && this.year <= 1996) //true
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
//or in ES6 use arrow function, since it does not have the this keyword and it will inherit the par scope this





//arguments keyword
//functions also get access to an arguments keyword, only in regular functions
//useful when you need to accept more params than you specify
const addExpr = function (a, b) {
    console.log(arguments); //array with 2 and 5
    return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 7);
var addArrow = (a, b) => a + b;