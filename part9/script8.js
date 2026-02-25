'use strict'
//logical assignment operators ES2021

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
    },
    orderDelivery: function ({ starterIndex=1, mainIndex=0, time='22:00', address }) {
        console.log(`${this.starterMenu[starterIndex]} and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1},  ${ing2} and  ${ing3}`)
    }

};

const rest1 = {
    name: 'capri',
    numGuests: 20
};

const rest2 = {
    name: 'La piazza',
    owner: 'Giovanni'
};

//set default value of num of guests for all restaurants

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;

//OR assignment operator - assings a var to a var if that var is currently falsy, but it does not work in case num of guests was defined as 0
rest1.numGuests ||= 10;   //  <=> rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests ||= 10;

console.log(rest1)
console.log(rest2);
//output
// { name: 'capri', numGuests: 20 }
// { name: 'La piazza', owner: 'Giovanni', numGuests: 20 }