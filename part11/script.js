'use strict'

//simple array methods

//bankist app


//elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');





const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];



const displayMovements = function (movements) {
  //empty the container
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`
    
    //if beforeend would be used the order would be reversed as each element would be added after the previous one at the end of container, hence use afterbegin(any new ch element would appear before all ch elements)
    containerMovements.insertAdjacentHTML('afterbegin',html)
  })
}

displayMovements(account1.movements)





























//////////////////////////////////////////

// //lectures
// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling']]
// // );

// const movements = [200,450,-400,3000,-650,-130,70,1300]


// //arrays are objects and they get access to special built in methods

// let arr = ['a', 'b', 'c', 'd', 'e']

// //slice - returns a new array , a copy of array with extracted parts, does 
// //not mutate the original array
// console.log(arr.slice(2));       //(3) ['c', 'd', 'e']
// console.log(arr.slice(2, 4));    //['c', 'd']  end parameter not included

// console.log(arr.slice(-2));      //['d', 'e']
// console.log(arr.slice(1, -2));    //['b', 'c'] starts at pos 1 and extracts all expect last 2 elements

// //create a shallow copy
// console.log(arr.slice());        



// //splice - difference of slice is that it mutates the original array
// console.log(arr.splice(2));      ////(3) ['c', 'd', 'e']
// console.log(arr);                ////(3) ['c', 'd', 'e']

// //splice is mostly used to remove one or more elements from array, e.g last element
// arr.splice(-1)



// //reverse - mutates the original array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// //concat
// const letters = arr.concat(arr2)
// console.log([...arr,...arr2]);

// //join
// console.log(letters.join('-')); //a-f-g-h-i-j



// //es2022 at method , good at method chaining, getting last element, counting from last elements, also works on strings

// const ar = [23,11,64]
// console.log(ar.at(0));   //gives element at pos 0, replaces bracket notation to the more modern looking at method

// //get last element of array supposing length is not known
// //without at
// console.log(ar[ar.length - 1]);

// //another way of getting last element
// console.log(ar.slice(-1)[0]);   //64

// //with at
// console.log(ar.at(-1)); //64


// //looping arrays - foreach

// for (const [i,movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// }


// //foreach requires a callback function - foreach loops over the array and in each iteration calls the callback function
// //in each iteration it will pass in the current element of the array as an argument
// // can have 1,2 or 3 params: first param should always be the current element, 2nd param the current index and the third the entire array looping over, the order matters
// movements.forEach(function (movement,i,array) {
//   if (movement > 0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// })
// //0 function(200) ...1 function(450)




// //for-each with maps and sets
// //map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling']]
// );


// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value} `);
// });

// //set - key is exactly as values as sets dont have kyes and indexes either
// //instead of key as param, leave it as underscore _, which in js means an unnecessary variable
// const currenciesUnique = new Set(['USD', 'GBP', 'GBP', 'EUR', 'EUR',]);
// currenciesUnique.forEach(function (value,key,set) {
//   console.log(`${key}: ${value} `);
// });
// //USD: USD
// //GBP: GBP
// //EUR: EUR
