'use strict'

//sets (iterables) - takes an iterable as input - collection of unique values - cannot have duplicates / can contain mixed data types | the order is irrelevant

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

console.log(ordersSet);  //pasta pizza risotto

console.log(new Set('jonas')); //{'j',o,..}


console.log(ordersSet.size); //3

console.log(ordersSet.has('Pizza'));  //true --similar to includes method in arrays

ordersSet.add('Garlic Bread');

//delete elements
ordersSet.delete('Pizza');


//delete all elements
// ordersSet.clear()


//looping
for (const order of ordersSet) console.log(order);


//normal use of sets is to remove duplicate values of arrays
const staff = ['waiter','chef', 'waiter', 'manager', 'chef', 'waiter']

const staffUnique = new Set(staff);
console.log(staffUnique);


//spread operator works in all iterables hence can create an array out of a set
const staffUni = [...new Set(staff)];

//counting how many different letters are in a string
console.log(new Set('jonassss').size); //5