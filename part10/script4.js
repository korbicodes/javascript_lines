'use strict'

//functions returning other functions -- useful especially in the prog paradigm: functiona programming

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
};


const greeter = greet('Hello there');
greeter('Jonas');

//or
greet('Hello')('Jonas');


//rewrite using arrow functions
// const greet2 = greeting => {
//     return name => console.log(`${greeting} ${name}`);
// };

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Helloo')('Jonas');