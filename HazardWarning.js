'use strict'

function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
            console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter !== 1 ? 'times':'time'} today!`);
    }
}
const tornadoWarning = hazardWarningCreator('Big old tornado');
const sharkAttack = hazardWarningCreator('Sharks everywhere!');
const potHole = hazardWarningCreator('Watch out - pot holes!');

tornadoWarning('Raymond St and Poplar Ave');
sharkAttack('Ocean Rd and Bubbles Blvd');
potHole('Gravel Lane and Tar St');
potHole('Down the street');