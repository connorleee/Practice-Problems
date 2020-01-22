/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    if (intervals.length < 1) return 0;

    let meetingEndTimes = []; //initialize a min heap - lowest number will be at position 0

    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const earliestEnd = meetingEndTimes[0];

        if (!meetingEndTimes.length) {
            meetingEndTimes.push(end);
        }

        else {
            // need new room
            if (start < earliestEnd) {
                meetingEndTimes.push(end);
                meetingEndTimes.sort((a, b) => a - b);
            }

            // can use a freed up room
            else {
                meetingEndTimes[0] = Math.max(end, meetingEndTimes[0]);
                meetingEndTimes.sort((a, b) => a - b);
            }
        }
    }
    return meetingEndTimes.length;
};