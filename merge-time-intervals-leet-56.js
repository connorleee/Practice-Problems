/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //sort by start time
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })

    let result = [[intervals[0]]];

    for (let i = 0; i < intervals.length; i++) {
        let prevMerge = result[result.length - 1]; //last meeting merged in result to compare
        let [s2, e2] = intervals[i];
        
        if(s2 <= prevMerge[1]) {
            prevMerge[1] = Math.max(prevMerge[1], e2);
        } else {
            result.push([s2, e2])
        }
    }

    return result.slice(1);
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))