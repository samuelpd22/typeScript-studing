"use strict";
class Conta0 {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPfisica extends Conta0 {
}
const conta1 = new ContaPfisica(24422, "Samuel");
console.log(conta1.titular);
console.log(conta1.numero);
