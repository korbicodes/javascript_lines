'use strict'

// object destructuring

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, //open 24 hours
            close: 24,
        },
        
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

// use the exact variable names to destruct from the object
// the order does not matter
// really important when getting data from an api (third party data)
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// using another name and not property name

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// default values
// default value of the starters will not be applied - there is property starterMenu
const { menu = [], starterMenu: starters = [] } = restaurant;


// mutating variables
let a = 111;
let b = 999; 
const obj = { a: 23, b: 7, c: 14 };

// override the two initial values
({ a, b } = obj);
console.log(a, b);

// nested objects
 const { fri : {open : o,close : c} } = openingHours;
console.log(o,c);