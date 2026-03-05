'use strict'

//maps data structure: more useful than sets | used to map values to keys , data is stored in key value pairs, keys can be any type (obj, arrays...)


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
const rest = new Map();
// add a new element to the data structure, also returns the map
rest.set('name', 'Classico Italiano');
rest.set(1, 'cologne, Germany');
console.log(rest.set(2, 'munich, Germany'));
//output
// Map(3) {
//   'name' => 'Classico Italiano',
//   1 => 'cologne, Germany',
//   2 => 'munich, Germany'
// }

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'we are open').set(false,'we are closed');

console.log(rest.get('name'));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));  //<=> rest.get(true)

//check if map contains a certain key
console.log(rest.has('categories'));
//delete elements
rest.delete('2');


console.log(rest.size);

//remove all the elements.
// rest.clear()

//can use arrays or objects as map keys
rest.set([1, 2], 'Test'); //{array(2) => "Test"}
console.log(rest.get([1, 2]));  //undefined - not the same object in heap

//solution
const arr = [1, 2];
rest.set(arr, 'Test'); 
console.log(rest.get(arr)); //refer to the same place in memory


rest.set(document.querySelector('h1'), 'heading')