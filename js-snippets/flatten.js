var arr = [1, 2, [3, [4, [5, 6]]]];

var newArray = arr.flat(Infinity);

/*
 * Using a stack
 */

function flatten(input) {
    const stack = [...input];
        const res = [];
        while (stack.length) {
            // pop value from stack
            const next = stack.pop();
            if (Array.isArray(next)) {
                // push back array items, won't modify the original input
                stack.push(...next);
            } else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}

var arr = [1, 2, [3, [4, [5, 6]]]];
var newArray = flatten(arr);