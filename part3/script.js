'use strict';

//prob 1
// calculate temperature amplitude - difference of highest and lowest temp
//check for errros
const temperatures = [3, -2, -6, -2, 'error', 9, 13, 17, 15, 14, 9, 5];


const calcTempAmplitude = array => {
    let max = array[0]; 
    let min = array[0];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] !== 'number') continue;
        if (array[i] > max) {
            max = array[i];
        } if (array[i] < min) {
            min = array[i]
        }
    }
    return max - min;
};

console.log(calcTempAmplitude(temperatures));

//prob 1 - function should receive 2 arrays of temps
//merge the arrays
// The concat() method of Array instances is used to merge two or more arrays 
// This method does not change the existing arrays, but instead returns a new array.
const calcTempAmplitude2 = (t1,t2) => {
    
    const t3 = t1.concat(t2);
    let max = t3[0]; 
    let min = t3[0];
    for (let i = 0; i < t3.length; i++){
        if (typeof t3[i] !== 'number') continue;
        if (t3[i] > max) {
            max = t3[i];
        } if (t3[i] < min) {
            min = t3[i]
        }
    }
    return max - min;
};
console.log(calcTempAmplitude2([3, 5, 1], [9, 0, 5]));


//debugging with console and breakpoints
//identify the bug
//find the bug

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celcius'))
    };
    console.table(measurement);
    debugger; //opens the debugger tool
    const kelvin = measurement.value + 273;
    return kelvin;
};
console.log(measureKelvin());