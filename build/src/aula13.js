"use strict";
function fsoma(v1, v2) {
    return v1 + v2;
}
function fsoma2(...n) {
    let s = 0;
    n.forEach((elementoN) => {
        s += elementoN;
    });
    return s;
}
console.log(fsoma2(10, 20, 30, 5));
function fsoma3(...n) {
    let s = 0;
    for (let elementoN of n) {
        s += elementoN;
    }
    return s;
}
console.log(fsoma3(10, 5));
