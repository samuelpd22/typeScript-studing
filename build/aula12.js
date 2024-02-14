"use strict";
function logar(user, senha) {
    console.log(`User: ${user}`);
    console.log(`Senha: ${senha}`);
}
logar("Samuel", "23344");
logar("teste", "0004");
function soma2(valor1, valor2) {
    let res = valor1 + valor2;
    return res;
}
soma2(2, 2);
console.log(soma2(4, 8));
let n_res = soma2(2, 2);
let n_str = soma2(2, 4).toString();
console.log(n_res);
console.log(n_str);
