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


//intro to objects - define key value pairs / order is not important/ use them for more unstructered data, and arrays for ordered data
// 4 properties
const employee = {
    name: 'Alessia',
    age: 30,
    level: 'senior',
    friends: ['James', 'Anna', 'Kelly']
}

//dot vs bracket notation
console.log(employee);
console.log(employee.age);
//in the bracket notation can put any expression, so in dot notation cannot use a computed property name, only the real one.
console.log(employee['name']);


//prompt returns the string
// const interestedIn = prompt("choose what do you want to know for Alessia"); //e.g: level

// console.log(employee[interestedIn]); // senior
employee.location = 'Berlin';
employee['twitter'] = '@alessia';
console.log(employee);

console.log(`${employee.name} has ${employee.friends.length} friends and her best friend is ${employee.friends[employee.friends.length - 1]}`);


//object methods
// this keywords equals to the object in which the method was called,so its equal to the obj calling the method
const employer = {
    name: 'Alessia',
    bYear: 1995,
    level: 'senior',
    friends: ['James', 'Anna', 'Kelly'],
    hasDriverLicense: true,
    // calcAge: function (bYear) {
    //     return 2025 - bYear
    // }
    calcAge: function () {
        console.log(this) //the employer boject
        return 2025 - this.bYear
    }

}

// console.log(employer.calcAge(employer.bYear))
// console.log(employer['calcAge'](employer.bYear))

console.log(employer.calcAge());


//it's not a good practice that every time you call function the calculation is made, for other cases it could be a heavier computation that takes more time, so its better to calculate once then store it in the object and then just retrive the age as property.



//age is a property defined inside the calcAge method/(function) , so if we try to access the age without calling/invoking the object method, the property we are trying to access is undefined, which means age property gets added on to the 'jonas' object only when the calcAge method is called.
const employerOne = {
    name: 'Alessia',
    bYear: 1995,
    level: 'senior',
    friends: ['James', 'Anna', 'Kelly'],
    hasDriverLicense: true,
    calcAge: function () {
        this.age = 2025 - this.bYear;
        return this.age;
    },
    getSummary: function () {
        return `${employerOne.name} is a ${employerOne.calcAge()}-year old developer, and has ${employerOne.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
}


employerOne.calcAge()
console.log(employerOne.age);


console.log(employerOne.getSummary());