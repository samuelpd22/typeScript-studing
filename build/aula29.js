"use strict";
function f_teste(v, r) {
    return v;
}
console.log(f_teste("44", 11));
console.log(f_teste(24, "tEsT"));
console.log(f_teste(true, false));
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const c1teste = new C_teste(22);
console.log(c1teste.valor);
const c2teste = new C_teste("ze");
console.log(c2teste.valor);
