/**
 * @param {number[][]} intervals
 * @return {number}
 */
// const minMeetingRooms = function (intervals) {
//     intervals.sort((a, b) => {
//         return a[0] - b[0]
//     })

//     if (intervals.length < 1) return 0;

//     let meetingEndTimes = []; //initialize a min heap - lowest number will be at position 0

//     for (let i = 0; i < intervals.length; i++) {
//         const [start, end] = intervals[i];
//         const earliestEnd = meetingEndTimes[0];

//         if (!meetingEndTimes.length) {
//             meetingEndTimes.push(end);
//         }

//         else {
//             // need new room
//             if (start < earliestEnd) {
//                 meetingEndTimes.push(end);
//                 meetingEndTimes.sort((a, b) => a - b);
//             }

//             // can use a freed up room
//             else {
//                 meetingEndTimes[0] = Math.max(end, meetingEndTimes[0]);
//                 meetingEndTimes.sort((a, b) => a - b);
//             }
//         }
//     }
//     return meetingEndTimes.length;
// };

const minMeetingRooms = function (intervals) {
    let startTimes = [], endTimes = [];
    
    // initialize the start and end time arrays
    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        
        startTimes.push(start);
        endTimes.push(end);
    }
    
    // sort the start and end time arrays
    startTimes.sort((a, b) => a - b);
    endTimes.sort((a, b) => a - b);
    
    // step through the start and end time arrays until the there are no more meetings starting and we can break the loop.
    let i = 0, j = 0;
    let maxRooms = 0, currentRooms = 0;
    while (i < intervals.length) {
        let startTime = startTimes[i], endTime = endTimes[j];

        if (startTime < endTime) {
            currentRooms++;
            i++;
        } else {
            currentRooms--;
            j++;
        }

        maxRooms = Math.max(maxRooms, currentRooms);
    }

    return maxRooms;
}