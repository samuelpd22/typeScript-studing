"use strict";
class Conta0 {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaPfisica extends Conta0 {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJuridica extends Conta0 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const contPJ = new ContaPJuridica(131333, "Lara");
console.log("Nome titular: " + contPJ.titular);
console.log("Numero conta:" + contPJ.numero);
console.log("CNPJ:" + contPJ.cnpj);
const conta1 = new ContaPfisica(121313133, "Samuel");
console.log("Nome titular: " + conta1.titular);
console.log("Numero conta:" + conta1.numero);
console.log("CPF: " + conta1.cpf);
