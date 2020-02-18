// /**
//  * @param {number[][]} dominoes
//  * @return {number}
//  */
// var numEquivDominoPairs = function(dominoes) {
//     if(dominoes.length < 2) return 0;

//     let count = 0;

//     for (let i = 0; i < dominoes.length-1; i++) {
//         const domino1 = dominoes[i];
//         for(let j = i+1; j < dominoes.length; j++) {
//             const domino2 = dominoes[j];
//             if(domChecker(domino1, domino2)) {
//                 count++;
//             }
//         }
//     }

//     return count;
// };

// var domChecker = function(d1, d2) {
//     let [a, b] = d1;
//     let [c, d] = d2;

//     return ((a == c && b == d) || (a == d & b == c)) ? true : false;
// }


var numEquivDominoPairs = function (dominoes) {
    if (dominoes.length < 2) return 0;

    let count = 0;

    let map = new Map(); //sorted domino [a, b], number of times seen

    for (let i = 0; i < dominoes.length; i++) {   
        const el = dominoes[i].sort((a, b) => a - b);

        let [a, b] = el;

        let curDom = [a, b].join(",");
        
        if (map.has(curDom)) {
            count += map.get(curDom);

            map.set(curDom, map.get(curDom) + 1)
        } else {
            map.set(curDom, 1);
        }
    }

    return count;
}

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])); //1