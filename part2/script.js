// strict mode  - makes it easier to write secure js code (helps introduce bugs - has to be the very first statement in the script
'use strict';

let hasDriverLicense = false;
const pass = true;

if (pass) hasDriverLicense = true;
if (hasDriverLicense) console.log("You can drive");

//if no strict mode activated 'you can drive' would not be logged and that because of the hasDriversLicens (the new var is set to true)

//when acitvating strict mode will get uncaught reference wrror: hasDriversLicenes is not defined.
//it even warns for reserved words.




//functions
function logger() {
    console.log("Privet!")
}
logger();


function processor(words, resources) {
    console.log(words, resources);
    const document = `Document with ${words} words and ${resources} resources`;
    return document; //result of calling this function
}
console.log(processor(3, 5));


//funcitons declaration
function calcAge1(bYear) {
    const age = 2025 - bYear;
    return age;
}
console.log(`${calcAge1(1999)}`);


//function expression - function without a name(anonymous function)
//In js funcitons are just values
//difference: can call function declarations before they are defined (hoisting)
const calcAge2 = function(bYear) {
    return 2025 - bYear;
};
console.log(`${calcAge2(1999)}`)


//arrow functions (shorter form of function expression)
// return happens implicitly (for one liner function)
//arrow functions do not get the 'this' keyword.
const calcAge3 = bYear => 2025 - bYear;
console.log(`${calcAge3(1999)}`);

const yearsToRetirement = (bYear) => {
    const age = 2025 - bYear;
    const retirement = 65 - age;
    return retirement;
};
console.log(yearsToRetirement(1999));

//functions calling other functions

function cutFruits(fruit){
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruits(apples);
    const orangePieces = cutFruits(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(2, 3));