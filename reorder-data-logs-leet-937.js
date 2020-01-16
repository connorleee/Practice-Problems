let reorderLogFiles = function (logs) {
    let digits = [];
    let letters = [];

    let logsSplit = [];

    let results = [];

    // split each element of logs do traverse easier for identification
    for (let i = 0; i < logs.length; i++) {
        const el = logs[i];
        logsSplit.push(el.split(" "));
    }

    // filter the logs into one of two buckets
    for (let j = 0; j < logsSplit.length; j++) {
        const el = logsSplit[j];

        // if we have a digit sequence
        if(parseInt(el[1])) {
            digits.push(el.join(" ")); //ready to push straight into the results
        } else {
            letters.push(el); //will need to join later
        }
    }

    // for (let log = 0; log < letters.length; log++) {
    //     const el = letters[log];
    //     const [identifier, ...message] = el;

    //     console.log(message)
    // }

    letters.sort((a, b) => a[1].localeCompare(b[1]));

    for(let k = 0; k < letters.length; k++) {
        letters[k].join(" ");
    }

    results.push(letters);
    results.push(digits);

    return results;
};

reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])
