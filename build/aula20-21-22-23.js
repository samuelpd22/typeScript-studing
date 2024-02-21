"use strict";
class Conta0 {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("Valor invalido");
            return;
        }
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log("Valor invalido");
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
}
class ContaPfisica extends Conta0 {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta Fisica criada!${titular}`);
    }
    info() {
        super.info();
        console.log(`CPF....:${this.cpf}`);
        console.log("-------------------------");
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("Valor de deposito muito grande para esse tipo de conta.");
        }
        else {
            super.deposito(valor);
        }
    }
    saque2(valor) {
        if (valor > 1000) {
            console.log("Valor de saque muito grande para o limite da conta");
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJuridica extends Conta0 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada!${titular}`);
    }
    info() {
        super.info();
        console.log(`CNPJ...:${this.cnpj}`);
        console.log("-------------------------");
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log("Valor de deposito muito grande para esse tipo de conta.");
        }
        else {
            super.deposito(valor);
        }
    }
    saque2(valor) {
        if (valor > 10000) {
            console.log("Valor de saque muito grande para o limite da conta");
        }
        else {
            super.saque(valor);
        }
    }
}
const contPJ = new ContaPJuridica(131333, "Lara");
const conta1 = new ContaPfisica(121313133, "Samuel");
conta1.deposito(1000);
conta1.saque2(2);
console.log(conta1.saldo());
