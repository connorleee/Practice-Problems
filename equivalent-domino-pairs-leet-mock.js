/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    

};

var domChecker = function(d1, d2) {
    let [a, b] = d1;
    let [c, d] = d2;

    return ((a == c && b == d) || (a == d & b == c)) ? true : false;
}