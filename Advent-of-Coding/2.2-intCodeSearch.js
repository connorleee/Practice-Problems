const runIntCode = require("./2.1-intCode");

const intCode = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 13, 1, 19, 1, 19, 9, 23, 1, 5, 23, 27, 1, 27, 9, 31, 1, 6, 31, 35, 2, 35, 9, 39, 1, 39, 6, 43, 2, 9, 43, 47, 1, 47, 6, 51, 2, 51, 9, 55, 1, 5, 55, 59, 2, 59, 6, 63, 1, 9, 63, 67, 1, 67, 10, 71, 1, 71, 13, 75, 2, 13, 75, 79, 1, 6, 79, 83, 2, 9, 83, 87, 1, 87, 6, 91, 2, 10, 91, 95, 2, 13, 95, 99, 1, 9, 99, 103, 1, 5, 103, 107, 2, 9, 107, 111, 1, 111, 5, 115, 1, 115, 5, 119, 1, 10, 119, 123, 1, 13, 123, 127, 1, 2, 127, 131, 1, 131, 13, 0, 99, 2, 14, 0, 0];

const targetOutput = 19690720;

function findIntCodeInput(intCodeArr, target) {

    for(let noun = 0; noun <= 99; noun++){
        for(let verb = 0; verb <= 99; verb++){
            for (let i = 0; i < intCodeArr.length; i += 4) {
                intCodeArr[1] = noun;
                intCodeArr[2] = verb;

                const opcode = intCodeArr[i];
                const value1 = intCodeArr[intCodeArr[i + 1]];
                const value2 = intCodeArr[intCodeArr[i + 2]];
                const newPositionPointer = intCodeArr[i + 3];
        
                if (opcode === 99) {
                    console.log(`Calculation completed successfully. Program halting at position: ${i}`);
        
                    if (intCodeArr[0] === target) {
                        console.log(`Success! noun: ${intCodeArr[1]} and verb: ${intCodeArr[2]}`)
                        console.log(`Answer: ${100 * intCodeArr[1] + intCodeArr[2]}`)

                        return 100 * intCodeArr[1] + intCodeArr[2];
                    }
                    break;
        
                } else if (opcode === 1) {
                    intCodeArr[newPositionPointer] = value1 + value2;
        
                } else if (opcode === 2) {
                    intCodeArr[newPositionPointer] = value1 * value2;
        
                } 
                // else {
                //     throw new Error("Invalid intCode: intCode segment doesn't start with 1, 2, or 99");
                // }
            }
        }
    }
}

// findIntCodeInput(intCode, targetOutput);

runIntCode([[1, 0, 0, 0, 99]])