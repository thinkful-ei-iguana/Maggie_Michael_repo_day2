'use strict';
let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let inputArray = input.split(' ');

let decodedMessage = inputArray.reduce(function(allWords, currentWord){
    if (currentWord.length === 3){
        return allWords + ' ';
    }
    else{
        return allWords + currentWord[currentWord.length-1].toUpperCase();
    }
}, ' ');

console.log(inputArray);
console.log(decodedMessage);