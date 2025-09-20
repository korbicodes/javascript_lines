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

//review
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const team1 = calcAverage(85, 54, 41);
const team2 = calcAverage(23, 43, 27);

const checkWinner = function (avgTeam1, avgTeam2) {
    if (avgTeam1 >= 2 * avgTeam2) {
        console.log(`Team 1 wins`);
    } else if (avgTeam2 >= 2 * avgTeam1) {
        console.log(`Team 2 wins`);
    } else {
        console.log(`No team wins.`)
    }
};

checkWinner(team1, team2);


//arrays data structure
//literal syntax
const employees = ['Michael', 'Alessia', 'Steven'];
console.log(employees);

const years = new Array(1991, 1984, 2009, 2020);

console.log(employees[0]);
console.log(employees.length);

//length is not 0 based, to get the last element: 3-1
console.log(employees[employees.length - 1]);


//even though employess is declared as const, can change the value because array is not a primitive value, only primitive values are immutable
employees[2] = 'Angela';

const building = ['centre', 731, employees];
console.log(building);

//basic array methods
//the value that push method returns is the length of the new array
const newLength = employees.push('James');  //add element in the end of array
console.log(newLength);

//add elements to beginning - unshift - also returns length
employees.unshift('john');
console.log(employees);

//remove elements
//pop - remove last element, returns the removed element
employees.pop()
const popped = employees.pop();
console.log(popped);
console.log(employees);

//remove first element: shift()
employees.shift();
console.log(employees);

console.log(employees.indexOf('Alessia'));
//using indexof for an element that does not exist returns -1


//es6 methods : includes : returns true/false / uses strict equality for the check
console.log(employees.includes('James'));

