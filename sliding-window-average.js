/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.size = size;
    this.window = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.window.push(val);
    let sum = 0;
    let windowSize = this.window.length;


    if(windowSize > this.size) {
        this.window.shift(); //remove the last element added. maybe could use a map for constant time deletion.
    }

    for (let i = 0; i < this.window.length; i++) {
        sum += this.window[i];
    }

    if (windowSize < this.size) {
        return sum / windowSize;
    } else {
        return sum / this.size;
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

var obj = new MovingAverage(3);
console.log(obj)
console.log(obj.next(1))
console.log(obj)
console.log(obj.next(10))
console.log(obj)
console.log(obj.next(3))
console.log(obj)
console.log(obj.next(5))
console.log(obj)