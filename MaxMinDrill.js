// Redo the "max and min (without sort or Math.max/min)" 
// drill but this time use a while loop instead of a for loop
'use strict'

function max(numbers){
	let biggest = numbers[0];
	let i = 0;
	while (i < numbers.length) {
		if(numbers[i] > biggest) {
			biggest = numbers[i]; 
		}
		i++; 
	}
	return biggest;
}
let answer =  max([3, 66, 42, 7, 13]);
console.log(answer);


function min(numbers){
	let smallest = numbers[0];
	let i = 0;
	while (i < numbers.length) {
		if(numbers[i] < smallest) {
			smallest = numbers[i]; 
		}
		i++; 
	}
	return smallest;
}
let answer2 =  min([3, 66, 42, 7, 13]);
console.log(answer2);