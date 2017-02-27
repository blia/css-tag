"use strict";

function flatObject(dialect, dict, strings, ...values) {
    const string = strings
        .reduce((out, str, i) => [...out, str, values[i]], [])
        .join('')
        .split('\n')
        .filter(row => row.length)
        // .map(row => (console.log(row), row))
        .map(row => ({
        func: dialect.getFuncName(row),
        args: dialect.getFuncArgs(row)
    }))
        // .map(row => (console.log(row), row))
        .map(({ func, args }) => dict.get(func).apply(null, args));
    return Object.assign.apply(null, string);
}

exports.flatObject = flatObject;
