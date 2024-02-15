"use strict";
class Computador {
    nomeObj = "";
    ram = 0;
    vCpu = 0;
    ligado = false;
    constructor(nomeObj, ram, vCpu, ligado) {
        this.nomeObj = nomeObj;
        this.ram = ram;
        this.vCpu = vCpu;
        this.ligado = ligado;
    }
}
const comp1 = new Computador("Carão", 18, 10, true);
const comp2 = new Computador("Gamer", 18, 20, true);
const comp3 = new Computador("Barato", 4, 10, false);
console.log(comp1);
console.log(comp2);
console.log(comp3);
