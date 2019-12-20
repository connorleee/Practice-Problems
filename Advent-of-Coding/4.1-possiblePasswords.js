const fs = require('fs');

// grab input data from another file syncronously. 
const input = fs.readFileSync("./Puzzle-Inputs/4.1-possiblePasswords.txt", "utf8")

const rangeSeparator = input.indexOf("-");

const inputLowerBound = parseInt(input.slice(0,rangeSeparator));
const inputUpperBound = parseInt(input.slice(rangeSeparator + 1));

function adjacentCheck(pw) {
    let pwString = pw.toString();

    for (let i = 0; i < pwString.length; i++) {
        if(pwString[i] === pwString[i+1]){
            for (let j = i+1; j < pwString.length; j++) {
                if(pwString[j] === pwString[j+1]){return false}
            }

            return true
        }
    }

    return false
}

function numPossiblePasswords(lowerBound, upperBound) {
    let possiblePasswords = [];
    let numPasswords = 0;

    for (let pw = lowerBound; pw < upperBound; pw++) {
        if(adjacentCheck(pw)){
            possiblePasswords.push(pw);
            numPasswords++
        }
    }

    return numPasswords;
}

// console.log(adjacentCheck(inputLowerBound))
// console.log(adjacentCheck(inputUpperBound))
// console.log(adjacentCheck(1220347))
// console.log(adjacentCheck(1222347))
// console.log(adjacentCheck(1223447))

console.log(numPossiblePasswords(inputLowerBound, inputUpperBound));
console.log(numPossiblePasswords(1000, 1034));
