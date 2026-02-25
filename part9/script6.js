'use strict'

//short circuiting


//logical operators can use any data type
//can return any data type, short-circuiting (in case of OR operator: if the first value is a truthy values, immediately returns that first value)
console.log(3 || 'jonas'); //3
console.log('' || 'jonas'); //jonas
console.log(true || 0) //true
console.log(undefined || null); //null


//hello is the first truthy values i
console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;  //10
console.log(guests2);



