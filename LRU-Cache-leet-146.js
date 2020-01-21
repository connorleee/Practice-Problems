/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    const capacity = capacity;
    let cache = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    
    for(let i = 0; i < this.cache.length; i++) { 
        const el = this.cache[i];

        if(el[0] === key) {
            const temp = this.cache.splice[i,1]; //remove the cache from the queue so it can be pushed to the top of the queue
            this.cache.push(temp); //move cache to end of queue
            return this.cache[temp];
        }
    }

    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */