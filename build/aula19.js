"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador2 {
    id;
    nomeObj = "";
    ram = 0;
    vCpu = 0;
    ligado = false;
    constructor(nomeObj, ram, vCpu, ligado) {
        this.nomeObj = nomeObj;
        this.ram = ram;
        this.vCpu = vCpu;
        this.ligado = ligado;
        this.id = 0;
    }
    info() {
        console.log(`Nome: ${this.nomeObj}`);
        console.log(`Cpu: ${this.vCpu}`);
        console.log(`Ram: ${this.ram}`);
        console.log(`Ligado?: ${this.ligado ? "Sim" : "Não"}`);
        console.log(`-----------------------------------------------------`);
    }
    upgradeRam(qtde) {
        if (qtde >= 0 && qtde <= 100) {
            this.ram = qtde;
        }
        else {
            console.log(`Valor ${qtde} não e permitido, para computador de nome, ${this.nomeObj}.`);
        }
    }
}
const comp4 = new Computador2("Carão", 18, 10, true);
const comp5 = new Computador2("Gamer", 18, 20, true);
const comp6 = new Computador2("Barato", 4, 10, false);
comp5.upgradeRam(-20);
comp5.nomeObj = "Super RAPIDÃO";
comp5.info();
