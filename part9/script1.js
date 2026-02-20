// destructuring arrays  - unpacking arrays in separate variables (es6 feture)

'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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

[main,secondary] = [secondary,main]