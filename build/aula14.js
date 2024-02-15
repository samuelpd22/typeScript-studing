"use strict";
teste();
function teste() {
    console.log("Teste");
}
const teste1 = (text) => {
    console.log(text);
};
teste1("Java e TOP!");
teste1("Java Spring e VIDA!");
const soma3 = (n1, n2) => {
    let res = n1 + n2;
    return res;
};
console.log(soma3(3, 3));
const somaArray = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numerosA = [1, 2, 3, 4, 5];
console.log(somaArray(numerosA));
