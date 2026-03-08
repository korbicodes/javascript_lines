'use strict';

//functinos accepting callback functions

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};


//higher-order function
const transformer = function (str, fn) {
    console.log(`Original string ${str}`);
    console.log(`Transformed string : ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);   //read the name property
};



// callback function is upperfirstword | js uses callbacks all the time
//makes it easy to split up the code into more usefula nd interconnected parts
//callback functinos allow to create abstraction (hide the detail of some code implementation)

//the transformer function does not care how the str is transformed it just does it, insted the code is abstracted away into other functions.
transformer('Javascript is the best', upperFirstWord);