function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {

    // Shuffle the input in place
    if (array.length <= 1) return;

    for (let idxChoosingFor = 0; idxChoosingFor < array.length; idxChoosingFor++) {
        const randChoiceIdx = getRandom(idxChoosingFor, array.length - 1);

        if(idxChoosingFor !== randChoiceIdx){
            const randValChosen = array[randChoiceIdx];
            array[randChoiceIdx] = array[idxChoosingFor];
            array[idxChoosingFor] = randValChosen;
        }
    }
}


const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);