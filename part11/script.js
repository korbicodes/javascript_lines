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

// displayMovements(account1.movements)




const user = 'Steven Thomas Williams'; //stw
// const username = user.toLowerCase().split(' ').map(user => {
//   return user.slice(0, 1);
// }).join('')

const username = user.toLowerCase().split(' ').map(user => user.slice(0, 1)).join('')
console.log(username);

const createUsernames = function (accs) {
  //modify the array that you get as input - foreach (side affect - mutates orignal array)
  accs.forEach(function (acc) {
    acc.username = acc['owner'].toLowerCase().split(' ').map(user => user.slice(0, 1)).join('');
  });
}
  // return user.toLowerCase().split(' ').map(user => user.slice(0, 1)).join('')

createUsernames(accounts)
console.log(accounts);



const showBalance = function (account) {
  account.balance = account.movements.reduce(function(acc,cur) {
    // console.log('acc',acc,cur);
    return acc + cur
  }, 0)
  labelBalance.textContent = balance;
}


// showBalance(account2.movements)


const displaySummary = function (account) {
  const incomes = account.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
  console.log('incomes: ', incomes);
  labelSumIn.textContent = incomes;
  const out = account.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + Math.abs(cur), 0)
  labelSumOut.textContent = out;
  const interest = account.movements.filter(mov => mov > 0).map(deposit => deposit * account.interestRate / 100).filter((int,i,arr)=>int>=1).reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = interest;
}

// displaySummary(account1.movements)






//Event handler
//in html the default behavior when you click the submit button is for the page to reload
//hitting enter in the input field is same as user clicking the button

function updateUI(account) {
  displayMovements(account.movements);
  showBalance(account)
  displaySummary(account);
}

let currentAccount;

//login implemetation 
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and welcome message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`

    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // //display movements
    // displayMovements(currentAccount.movements)
    // //display balance
    // showBalance(currentAccount)
    // //display summary
    // displaySummary(currentAccount)

    updateUI(currentAccount)
  }
})


//implemeting transfers
btnTransfer.addEventListener('click', function (e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(acc => acc.username === inputTransferTo.value)
  
  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && receiveAcc && currentAccount.balance >= amount && receiveAcc?.username === currentAccount.username) {
    
    //doing the transfer
    currentAccount.movements.push(-amount)
    receiveAcc.movements.push(amount)

    updateUI(currentAccount)
  }
})

////the findIndex method - same as find but returns the index of the found element and not the element itself.

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    //delete account
    accounts.splice(index, 1)
    
    //logout
    containerApp.style.opacity = 0;
    
  }
  inputLoginUsername.value = inputLoginPin.value = '';
})













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





//data transformation: map, filter, reduce
//create new arrays based on transforming data from other arrays

//map is similar to foreach but it creates a brand new array based on original array (very useful even more than forEach) --- so map returns a new array containing the results of applying an operation(callback function) on all original array elements(e.g current * 2 -> new array where each elements is multiplied by 2).

const movements = [200,450,-400,3000,-650,-130,70,1300]

// //convert euro to dollars
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// })

// //using arrow functions
// const movementUSD = movements.map(mov=>mov*eurToUsd)

// console.log(movementsUSD);

// //using for of
// const movementUsd = [];
// for (const mov of movements) {
//   movementUsd.push(mov*eurToUsd)
// }


// const movementDescriptions = movements.map((mov, i) => {
//   return mov > 0 ? `Movement ${i+1} : You deposited ${mov}` : `Movement ${i+1} : You withdrew ${Math.abs(mov)}`
  
// })
// console.log(movementDescriptions);



//filter: used to filter for elements in original which fulfill a certain condition - returns a new array containing the array elements that passed a specific condition (e.g filter if current>2 )


//i and arr not used in filter at all
const deposits = movements.filter(function(mov,i,arr) {
  return mov > 0 
})
console.log(`Deposits: ${deposits}`);

//using the methods instead of the regular for loop, is that it allos chaining methods
const withdraws = movements.filter(mov=>mov<0)

//reduce: boils all array elements down to one single values (e.g adding all elements together: acc + current) | no new array only the reduced value.

//first parameter is actually the accumulator - always the current element of the array, 2nd is current index,and the third oneis the entire array
//reduce also loops over the array and calls the callback function in each iteration
//callback function is the first argument of the reduce method, but it also has a second parameter, which is the initial value of parameter
// const balance = movements.reduce(function (acc,cur,i,arr) {
//   //add current value to accumulator
//   console.log(`Iteration number ${i} : ${acc}`);
//   return acc + cur
// },0)
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur,0);
console.log(balance);




//with for loop  -- an external variables is needed.s
let acc = 0;
for (const mov of movements) {
  acc += mov;
}
console.log(acc);
//foraech method creates side affects. The map method logs the entire array to the console and not the elemnts one by one and so in the map method no side affect is created in each of the iteration.

//maximum value

const max = movements.reduce(function (acc, cur) {
  if (cur > acc) return cur
  else return acc
}, movements[0])

console.log(max);



//PIPELINE
//chaining methods
//can only chain a method after another if the first one returns an array

//do not overuse chaining - try to optimize it cause many methods after another
//can cause performance issues. when chaining methods keep looking for opportuniites to keep up your codes performance.

//2 its a bad practice in JS to chain methods that mutate an underlying original array (e.g splice method)
const total = movements.filter(mov=>mov>0).map(cur=>cur*1.1).reduce((acc,cur)=>acc+cur,0)
console.log('total', total);






//find method - retrieve an element of an array based on a condition
//does not return new array, only the first element that fulfills the condition
const find = movements.find(mov => mov < 0);

console.log(find);

console.log(accounts);

// //can find an object based on some property of that object
// const account = accounts.find(acc =>  acc.owner === 'Jessica Davis')
// console.log(account);


// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// }

console.log(movements);


//finds last value < 0
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);


//findlastINdext
const latestLargeMovementInde = movements.findLastIndex(mov => Math.abs(mov) > 1000);
console.log(latestLargeMovementInde);
console.log(`your latest large movement was ${movements.length - latestLargeMovementInde - 1}`);