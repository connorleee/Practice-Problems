let isValid = function (s) {
    if (s.length < 1) { return true }

    const stack = [];
    let validFlag = false;

    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        const lastInStack = stack[stack.length - 1];

        if(el === ")") {
            if(lastInStack === "(") {stack.pop()}
            else{stack.push(el)}
            continue;
        } else if(el === "]") {
            if(lastInStack === "[") {stack.pop()} 
            else{stack.push(el)}
            continue;
        } else if(el === "}") {
            if(lastInStack === "{") {stack.pop()} 
            else{stack.push(el)}
            continue;
        } else{
            stack.push(el);
            validFlag = true;
        }
    }

    if (stack.length === 0 && validFlag === true) { return true }

    return false;
}

