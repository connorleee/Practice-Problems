const fs = require('fs');

// grab input data from another file syncronously. 
const input = fs.readFileSync("./Puzzle-Inputs/4.1-possiblePasswords.txt", "utf8")

const rangeSeparator = input.indexOf("-");

const inputLowerBound = parseInt(input.slice(0, rangeSeparator));
const inputUpperBound = parseInt(input.slice(rangeSeparator + 1));

// This function tests an individual password against the problem criteria 
function pwValidCheck(pw) {
    let pwString = pw.toString();

    // check for length
    if (pwString.length !== 6) { return false }

    let valueToBeLargerThan = parseInt(pwString[0]);

    let consecDigFlag = false; // used to check if there is at least on set of consecutive numbers

    for (let i = 0; i <= pwString.length; i++) {
        // Check for increasing values
        if (parseInt(pwString[i]) < valueToBeLargerThan) { return false }

        valueToBeLargerThan = parseInt(pwString[i]);

        // Test for consecutive digits
        if (pwString[i] === pwString[i + 1]) {
            consecDigFlag = true;
        }
    }

    if (consecDigFlag === true) {
        return true
    } else {return false}
}

// This function tests all passwords in the input range and returns the number of usable passwords
function numPossiblePasswords(lowerBound, upperBound) {
    let possiblePasswords = [];

    for (let pw = lowerBound; pw < upperBound; pw++) {
        if (pwValidCheck(pw)) {
            possiblePasswords.push(pw);
        }
    }

    return possiblePasswords.length;
}

// console.log(pwValidCheck(inputLowerBound))
// console.log(pwValidCheck(inputUpperBound))
// console.log(pwValidCheck(128888))
// console.log(pwValidCheck(177889))
// console.log(pwValidCheck(1223447))

console.log(numPossiblePasswords(inputLowerBound, inputUpperBound));




// const matching = [];
// for(let i = 178416; i <= 676461; i++) {
//   const s = i.toString();
//   const a = [...s];

//   if(s.length == 6 && /(.)\1/.test(s) && s == a.sort().join``){
//     matching.push(s)
//   }
// }

// console.log(matching.length)