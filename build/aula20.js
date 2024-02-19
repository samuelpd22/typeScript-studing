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
class ContaPJuridica extends Conta0 {
}
const contPJ = new ContaPJuridica(59912, "Lara");
console.log(contPJ.titular);
console.log(contPJ.numero);
const conta1 = new ContaPfisica(24422, "Samuel");
console.log(conta1.titular);
console.log(conta1.numero);
