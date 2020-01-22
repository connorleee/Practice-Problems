/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function (intervals) {
    if (intervals.length < 1) return 0;

    let meetingEndTimes = [];

    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const earliestEnd = meetingEndTimes[0];

        if (!meetingEndTimes.length) {
            meetingEndTimes.push(end);
        } 

        // need new room
        else if (start < earliestEnd) {
            meetingEndTimes.push(end);
            meetingEndTimes.sort((a, b) => a - b);
        }

        // can use a freed up room
        else {
            earliestEnd[0] = Math.max(end, earliestEnd[0]);
            meetingEndTimes.sort((a, b) => a - b);
        }
    }

    return meetingEndTimes.length;
};