'use strict'

//strings
const airline = 'TAP Air Germany'
const plane = 'A320'

console.log(airline.indexOf('r')); //0based
console.log(airline.lastIndexOf('r'));

//search for entire words also
console.log(airline.indexOf('Germany')); //case sensitive

console.log(airline.slice(4)); //air germany 
console.log(airline.slice(4, 7)); //air (end value is not included in the string) - 3 letters (7-4)

//get the first word
console.log(airline.slice(0, airline.indexOf(' ')));
//get the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //+1 to remove the space
console.log(airline.slice(1, -1)); //AP Air German - removes first and last letter

const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1);
    if (s ==='B' || s === 'E')console.log('you got the middle seat');else console.log('you got another seat');
};
checkMiddleSeat('11B');

//strings are primitives.whenever a method is called on a string, javascript will automatically bts convert the str primitive to a string object with the same content,and then its on that object where the methods are called.when the operation is done the object is converted back to a regular string primitive - all string methods return primitives.

console.log(new String('jonas'));




//string methods
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('jonas'.toUpperCase());

//capitalization
const passenger = 'jOnas'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

const email = 'hello@jonas.io'
const loginEmail = '   Hello@Jonas.Io \n'

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail);

//remove white space in beginning or en: trime

//replacing - only replacs the first occurrence
const priceGB = '288,97e';
const priceUSA = priceGB.replace('e', '$').replace(',','.');
console.log(priceUSA);

//replaceAll - replace all occurrences of the searched string
const announcement = 'all passengers come to boarding door 23.boarding door 23!'

console.log(announcement.replaceAll('door','gate'));

//regular expression g-for global (before replaceAll)
console.log(announcement.replace(/door/g, 'gate'));

//booleans : enswith startswith includes
const theplane = 'A320neo';
console.log(theplane.includes('neo'));

//split and join
console.log('very+good+string'.split('+'));
const [firstName, lastName] = 'jonas schmed'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//capitalize name
const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('jessica and smith davis');
capitalizeName('jonas schmed');

//padding a string (add nr of chars at a string until it has a desired length)
const message = 'Go to gate 32!'
console.log(message.padStart(25, '+').padEnd(30,'+')) //5 more + after;
console.log('jonas'.padStart(25, '+'));

const maskCreditCard = function (number) {
    const str = number + ''; //number as a string (when operand is + it converts it to srt)
    const last = str.slice(-4);
    return last.padStart(str.length,'*')

};

console.log(maskCreditCard(4339736495));
console.log(maskCreditCard('3992591'));


//repeat - repeat same string multiple times
const message2 = 'Bad weather...All departures delayed... ';
console.log(message2.repeat(3));


const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈ '.repeat(n)}`);
}
planesInLine(5);
