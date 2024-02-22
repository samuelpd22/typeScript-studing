"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objeto = exports.coisas = void 0;
exports.coisas = ["Corda", "Pilha", "Lampada", "Chave"];
class Pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
class objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.objeto = objeto;
exports.default = Pessoa;
