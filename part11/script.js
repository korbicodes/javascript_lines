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




//lectures
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']]
);

const movements = [200,450,-400,3000,-650,-130,70,1300]


//arrays are objects and they get access to special built in methods

let arr = ['a', 'b', 'c', 'd', 'e']

//slice - returns a new array , a copy of array with extracted parts, does 
//not mutate the original array
console.log(arr.slice(2));       //(3) ['c', 'd', 'e']
console.log(arr.slice(2, 4));    //['c', 'd']  end parameter not included

console.log(arr.slice(-2));      //['d', 'e']
console.log(arr.slice(1, -2));    //['b', 'c'] starts at pos 1 and extracts all expect last 2 elements

//create a shallow copy
console.log(arr.slice());        



//splice - difference of slice is that it mutates the original array
console.log(arr.splice(2));      ////(3) ['c', 'd', 'e']
console.log(arr);                ////(3) ['c', 'd', 'e']

//splice is mostly used to remove one or more elements from array, e.g last element
arr.splice(-1)



//reverse - mutates the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//concat
const letters = arr.concat(arr2)
console.log([...arr,...arr2]);

//join
console.log(letters.join('-')); //a-f-g-h-i-j