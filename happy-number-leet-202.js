let isHappy = function(n) {
    function sumOfSquares(int) {
        let intArray = (""+int).split(""); //splits integer into array of digits. turns into strings
        
        let sum = 0;

        for(let i = 0; i < intArray.length; i++){
            const digit = parseInt(intArray[i]);
            sum += digit * digit;
        }

        return sum;
    }

    let numsSeen = new Set();

    while( n !== 1 ) {
        if(numsSeen.has(n)) return false;

        numsSeen.add(n);

        n = sumOfSquares(n);
    }
    
    return true;
}