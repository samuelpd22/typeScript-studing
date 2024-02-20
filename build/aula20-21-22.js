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
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
        console.log("-------------------------");
    }
}
class ContaPfisica extends Conta0 {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta Fisica criada!${titular}`);
    }
}
class ContaPJuridica extends Conta0 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada!${titular}`);
    }
}
const contPJ = new ContaPJuridica(131333, "Lara");
const conta1 = new ContaPfisica(121313133, "Samuel");
conta1.info();
contPJ.info();
