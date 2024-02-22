"use strict";
function soma0(n1 = 0, n2 = 0) {
    let res = n1 + n2;
    return res;
}
console.log(soma0(5, 21));
console.log(soma0());
function novoUser1(user, pass, nome) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Nome: ${nome}`);
}
;
novoUser1("Samuelpd", "1234", "Samuel Drumond");
novoUser1("Lara22", "K4343");
function novoUser2(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
}
;
novoUser2("Igorrib2", "rib99", "Igor Ribeiro");
novoUser2("Iguin22", "irgg22");
