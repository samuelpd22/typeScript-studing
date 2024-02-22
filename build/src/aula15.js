"use strict";
function fsoma(v1, v2, v3) {
    return v1 + v2 + v3;
}
console.log(fsoma(1, 2, 3));
function restSoma(...n) {
    let s = 0;
    n.forEach((elementoN) => {
        s += elementoN;
    });
    return s;
}
console.log(restSoma(10, 20, 30, 40, 200));
