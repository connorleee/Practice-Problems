/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cap = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let val = this.cache.get(key);

    if(typeof val === "undefined") return -1

    this.cache.delete(key); // resetting the order of the key value pair taking advantage of the map insertion order
    this.cache.set(key, val);

    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    this.cache.delete(key); //returns false if no key is found
    this.cache.set(key, value);
    const keys = this.cache.keys();
    if( this.cache.size > this.cap) {
        this.cache.delete(keys.next().value); // deletes the oldest key value pair in the map
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */