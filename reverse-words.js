function reverseWords(message) {

    reverseCharacters(message, 0, message.length - 1);

    let currentWordStartIdx = 0;

    for (let i = 0; i <= message.length; i++) {
        const char = message[i];
        
        if(char === " " || i === message.length) {
            reverseCharacters(message, currentWordStartIdx, i - 1);

            currentWordStartIdx = i + 1;
        }
    }

}



function reverseCharacters(phrase, leftIdx, rightIdx) {
    while(leftIdx < rightIdx) {
        let temp = phrase[rightIdx];

        phrase[rightIdx] = phrase[leftIdx];
        phrase[leftIdx] = temp;

        leftIdx++;
        rightIdx--;
    }
    
}





// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}