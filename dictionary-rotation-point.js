function findRotationPoint(words) {
    const firstWord = words[0];

    // Find the rotation point in the vector
    let floorIdx = 0;
    let ceilingIdx = words.length - 1;
    
    while(floorIdx < ceilingIdx) {
        const distance = ceilingIdx - floorIdx;
        const halfIdx = Math.floor(distance / 2);
        const guessIdx = floorIdx + halfIdx;

        // condition where first word is later in dictionary than second word
        if(words[guessIdx] >= firstWord) {
            floorIdx = guessIdx;
        } else {
            ceilingIdx = guessIdx;
        }

        if(floorIdx + 1 === ceilingIdx){
            return ceilingIdx;
        }
    }

    return false;
  }
  
   
  
  
  // Tests
  
  let desc = 'small array';
  let actual = findRotationPoint(['cape', 'cake']);
  let expected = 1;
  assertEquals(actual, expected, desc);
  
  desc = 'medium array';
  actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
  expected = 4;
  assertEquals(actual, expected, desc);
  
  desc = 'large array';
  actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
    'undulate', 'xenoepist', 'asymptote',
    'babka', 'banoffee', 'engender',
    'karpatka', 'othellolagkage']);
  expected = 5;
  assertEquals(actual, expected, desc);
  
  function assertEquals(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }