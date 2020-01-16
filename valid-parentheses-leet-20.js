let isValid = function (s) {
    if (s.length < 1) { return true }

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        const lastInStack = stack[stack.length - 1];

        switch (el) {
            case el === ")":
                if (lastInStack === "(") { stack.pop() }
                break;

            case el === "]":
                if (lastInStack === "[") { stack.pop() }
                break;

            case el === "}":
                if (lastInStack === "{") { stack.pop() }
                break;

            default:
                stack.push(el)
                break;
        }
    }

    if (stack.length !== 0) { return false }

    return true;
}