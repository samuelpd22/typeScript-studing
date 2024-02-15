"use strict";
class Computador {
    nomeObj = "";
    ram = 0;
    vCpu = 0;
    ligado = false;
}
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();
comp1.nomeObj = "Gamer";
comp2.nomeObj = "Baratão";
comp3.nomeObj = "Carão";
console.log(comp1.nomeObj);
console.log(comp2.nomeObj);
console.log(comp3.nomeObj);
