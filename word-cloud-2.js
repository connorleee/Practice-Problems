class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }

    populateWordsToCounts(inputString) {

        // Count the frequency of each word
        let wordStartIndex = 0;

        for (let i = 0; i < inputString.length; i++) {
            const char = inputString[i];

            //could use ascii char codes 32 - 64 maybe
            // this is to find the breaks in the words
            if (char === " " || char === "." || char === "!" || char === "?" || char === "," || inputString[i + 1] == null) {
                
                let word = "";

                if(inputString[i + 1] == null){
                    word = inputString.slice(wordStartIndex, inputString.length);
                } else {
                    word = inputString.slice(wordStartIndex, i);
                }

                // map the word
                // add word to map if it hasn't been in before
                if (!this.wordsToCounts.has(word)) {
                    this.wordsToCounts.set(word, 1); //adds word and sets value to 1
                } else {
                    this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1);
                }

                wordStartIndex = i + 1;
            }
        }

        // console.log(this.wordsToCounts.entries())
    }
}





// Tests

// There are lots of valid solutions for this one. You
// might have to edit some of these tests if you made
// different design decisions in your solution.

let desc = 'simple sentence';
let actual = new WordCloudData('I like cake').wordsToCounts;
let expected = new Map([['I', 1], ['like', 1], ['cake', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'longer sentence';
actual = new WordCloudData('Chocolate cake for dinner and pound cake for dessert').wordsToCounts;
expected = new Map([['and', 1], ['pound', 1], ['for', 2], ['dessert', 1],
['Chocolate', 1], ['dinner', 1], ['cake', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'punctuation';
actual = new WordCloudData('Strawberry short cake? Yum!').wordsToCounts;
expected = new Map([['cake', 1], ['Strawberry', 1], ['short', 1], ['Yum', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'hyphenated Words';
actual = new WordCloudData('Dessert - mille-feuille cake').wordsToCounts;
expected = new Map([['cake', 1], ['Dessert', 1], ['mille-feuille', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'ellipses between words';
actual = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts;
expected = new Map([['mmm', 2], ['decisions', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'apostrophes';
actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
expected = new Map([['Bakery', 1], ['Cakes', 1], ["Allie's", 1], ["Sasha's", 1]]);
assert(isMapsEqual(actual, expected), desc);

function isMapsEqual(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        const testVal = map2.get(key);

        // In cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}

function assert(condition, desc) {
    if (condition) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL`);
    }
}