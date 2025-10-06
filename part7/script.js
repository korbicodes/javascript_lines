// scoping
'use strict';

// function calcAge(bYear) {
//     const age = 2025 - bYear;
//     console.log(firstName);  //comes from global scope

//     function printAge() {
//         const output = `You are ${age}, born in ${bYear}`
//         console.log(output);

//         if (bYear >= 1981 && bYear <= 1996) {
//             var miellenial = true;
//             const str = `And also you a miellenial ${firstName}`;
//             console.log(str);

//             function add(b, c) {
//                 return b + c;
//             }
//         }
//         console.log(add(3, 5)); //reference error , functions are block scoped, only for strict mode
//         console.log(str) //reference error : let and const are block scoped
//         console.log(miellenial)  //var is not block scoped, just function scoped
//     }
//     printAge();
//     return age;

// }
// const firstName = 'Alessia';
// calcAge(1993);



//hoisting

//variables
// console.log(fName);  //undefined - vars declared with var are hoisted to the value undefined
// console.log(job); //reference error - TDZ 
// console.log(year); //


// var fName = "alessia";
// let job = 'mentor';
// const year = 1993;


// //functins
// console.log(addDecl(2,3))  //5 
// console.log(addExpr(2,3)) //reference error
// console.log(addArrow(2,3))

// function addDecl(b, c) {
//     return b + c;
// }

// const addExpr = function (b, c) {  //just a const variable, it's in TDZ  - if var was used: addExpr is not a function, same for addArrow, its same as calling undefined(2,3)
//     return b + c;
// };

// const addArrow = (b, c) => b + c; 



//example

if (!numProducts) deleteShoppingCard();  //all products deleted because at this time the value of numProducts is undefined because of hoisting.


//best practices: don't use var for declarations, use const and let if you need to change the value of variable later.
//to write clean code declare variables at the top of each scope
//use functions only after their declaration.
var numProducts = 10;

function deleteShoppingCard() {
    console.log(`All products deleted`);
}


var b = 2;
let c = 3;
const d = 1;


// check if b is property of window obj
// console.log(b === window.b);  //true
// console.log(b === window.b);  //false
// console.log(b === window.b);  //false
// variables created with let and const do not get the window object.






//this keyword
console.log(this);  //window object


//normal function, function not attache to an object.
const calcAge = function (bYear) {
    console.log(2025 - bYear)
    console.log(this);  //undefined in strict mode otherwise the global obj
};

calcAge(1993);



//arrow function 
const calcAgeArrow = bYear => {
    console.log(2025 - bYear)
    console.log(this); //window because arrow function do not get it's own this keyword, it uses the lexial this keyword, which in this situation is window in the global scope.
};

calcAgeArrow(1995);

const alessia = {
    year: 1993,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);
    }
};

alessia.calcAge(); // alessia object
//this keyword always points to the method that is calling the object.

const f = jonas.calcAge;
console.log(f);  //the function
f();   //undefined, the f is just a regular functiton call.



