'use strict';

const numbers = [1,3,24,7];
let divisor = 0;
let sum = 0;

numbers.forEach(function(eachNumber){
  divisor++;
  sum = eachNumber + sum;
});

let average = sum / divisor;
console.log(average);

