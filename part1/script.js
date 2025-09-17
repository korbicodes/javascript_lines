
const javascriptIsFun = true;
console.log(javascriptIsFun);


// typeof operator
console.log(typeof true);   //boolean
console.log(typeof 23); //number


let year;
console.log(year); //undefined (empty variable)
console.log(typeof year); //undefined

console.log(typeof null); //object - it's a bug , it should return null

// when using const you need an initial value
// by default alaways use const - less mutations is better
// let is block scoped and var is function scoped


//operator allows to transform values or combine multiple values
// assignment has right to left calculation
let b, g;
b = g = 25 - 10 - 5;
console.log(b, g); // b = g = 10  => g=10, b=10

// type coercien - js automatically converts types (implicitly)
const inputYear = '1991';
console.log(inputYear + 18);  //199118 as string

// can conver to number,string or boolean
console.log(Number(inputYear));  //convert str in number
console.log(typeof NaN); //type of not a number(invalid number) - number


//automatic type coercion
// + operator triggers a coercion to strings
console.log("She is " + 23 + "years old"); //23 converts to string

//- operator triggers coercion to numbers
console.log('23' - '10' - 3); //10 , JS converts strings to numbers

//truthy and falsy values
//falsy values: 0, ' ', undefined, null, Nan
// falsy values values that become false when converting them into boolean
console.log(Boolean(0));  //false
console.log(Boolean(undefined));  //false


// boolean type coercion happens in 2 cases: when using logical operators and logical context (if statement..)

const money = 0;
// js converts money into a boolean (0 is falsy value)
if (money) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job.");
}

//euro is undefined here, which is a falsy value: euro is undefined
let euro;
if (euro) {
    console.log('Good, euro is defined');
} else {
    console.log("Euro is undefined")
}


// if let euro = 0 -> euro is undefined , which in some cases is not good since value 0 has to be used.


//equality operators -- always default to strict eq op.
// === strict equality op: compares value and type also
// == loose eq operator: only compares the value (does type coercion)
let cash = 19;
if (cash === 19) console.log("You've got enough cash");


const bonus = Number(prompt("Enter the bonus value"));
console.log(bonus);  //23
console.log(typeof bonus); //string

if (bonus === 23) {  
    console.log("cool 23 is good")
}

// expression is a piece of code that produces a value (3+4)


// an opearator is an expression so it produces a value
// conditional/ternary operator
const credit = 10;
credit >= 10 ? console.log("You can apply for bonus") : console.log("Not enough credit to get a bonus");

const bonuses = credit >= 10 ? 'bonus' : 'no bonus.';
console.log(bonuses);

console.log(`You can have ${credit >= 10 ? 'bonus' : 'no bonus.'}`);

// In JS old features are never removed, just incremental updates, hence
// websites keep working forever (backwards compatibility - don't break the web)

// during development: building site in your pc - simply use the latest google chrome - to use latest features of JS
//production: use Babel to transpile and polyfill your code (converting back to ES5 to ensure browser compatibility for all users)
