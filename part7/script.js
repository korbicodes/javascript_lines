// scoping
'use strict';

function calcAge(bYear) {
    const age = 2025 - bYear;
    console.log(firstName);  //comes from global scope

    function printAge() {
        const output = `You are ${age}, born in ${bYear}`
        console.log(output);

        if (bYear >= 1981 && bYear <= 1996) {
            var miellenial = true;
            const str = `And also you a miellenial ${firstName}`;
            console.log(str);

            function add(b, c) {
                return b + c;
            }
        }
        console.log(add(3, 5)); //reference error , functions are block scoped, only for strict mode
        console.log(str) //reference error : let and const are block scoped
        console.log(miellenial)  //var is not block scoped, just function scoped
    }
    printAge();
    return age;

}
const firstName = 'Alessia';
calcAge(1993);


