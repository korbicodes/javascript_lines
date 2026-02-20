// destructuring arrays  - unpacking arrays in separate variables (es6 feture)

'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};


const arr = [2, 3, 4];
// not an array, when its in the left side of equal sign its desctructuring, original array is not affected.
const [a, b, c] = arr;
console.log(a, b, c,);



const [first, second] = restaurant.categories;
console.log(first, second);

// taking first and third category - leave a hole in the destructuing operator
let [main, , secondary] = restaurant.categories;
console.log(main,secondary) 


    // switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

// [main, secondary] = [secondary, main];


// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);


// nested destructuring
const nested = [2, 4, [5, 6]];
const [element1, , element3] = nested;
console.log(element1,element3)

//getting all elements
const [i, j, [e, d]] = nested;
console.log(i, j, e, d);


// set default values for variables (when not knowing the length of array =e.g when getting data from an api)
const [p, q, r] = [8, 9];
console.log(p, q, r); //8,9 undefinded

// setting default values
const [u = 1, v = 1, z = 1] = [8, 9];
console.log(u, v, z); //8,9,1