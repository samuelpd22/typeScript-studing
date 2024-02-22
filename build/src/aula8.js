"use strict";
let dados = {
    nome: "Samuel",
    idade: 23,
    status: "A",
    ola: () => { console.log("Eu sou uma função(METODO) dentro do objeto!"); },
};
console.log(dados);
console.log(typeof (dados));
console.log(dados.nome);
console.log(dados.idade);
console.log(dados.status);
dados.nome = "Lara";
dados.idade = 18;
dados.status = "B";
dados.ola();
console.log(dados);
