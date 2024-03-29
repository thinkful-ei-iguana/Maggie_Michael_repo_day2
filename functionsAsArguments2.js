'use strict';

function filter(arr, fn) {
    let newArray =[];
    for(let i = 0; i < arr.length; i++){
        if (fn(arr[i]) === true){
            newArray.push(arr[i]);
        }
    }
    return newArray; 
}

// function filter(arr,fn){
//     let newArray =[];
//     arr.forEach((fn(), i) => newArray.push(arr[i]));
// }

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

//myNames.forEach(item, index) => console.log(newArray));

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

// let newArray = [];
// let i = 0;
// myNames.forEach((filter, i) => newArray.push(myNames[i]));
// console.log(newArray);

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

