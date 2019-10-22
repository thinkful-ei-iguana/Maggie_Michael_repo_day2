'use strict';

let turtleMoves =[[0,0], [0,5], [-1,-3], [-3,1], [2,-4], [3,2]];
//let turtleMoves = [0,-1,-3,5,8,-20];

function backTracker(moves) {
    return moves[0] >= 0 && moves[1] >= 0;
  } 

function noStepsBack(array){
    let forwardProgress = array.filter(backTracker);
    return forwardProgress;
}
const back = noStepsBack(turtleMoves);
console.log(noStepsBack(turtleMoves));

function addingSteps(moves){
    return moves[0]+moves[1];
}
function totalSteps(back){
    let newArray = back.map(addingSteps);
    return newArray;
}
const finalSteps = totalSteps(back);
console.log(finalSteps);


finalSteps.forEach(function(finalStep, i){
    console.log(`Movement #${i+1}: ${finalStep}`);
});
