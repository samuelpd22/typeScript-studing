"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Prata"] = 2] = "Prata";
        Cores[Cores["Vermelho"] = 3] = "Vermelho";
        Cores[Cores["Roxo"] = 4] = "Roxo";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get MinhaCor() {
            return this.cor;
        }
        get MeuNome() {
            return this.nome;
        }
        get EstouLigado() {
            return (this.motor.liga ? "Sim" : "Não");
        }
        get MinhaPotencia() {
            return this.motor.potencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(145, 4, new Motores.Turbo(100)), 2);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(100, 3), 1);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
    let Motores;
    (function (Motores) {
        class Turbo {
            pot;
            constructor(pot) {
                this.pot = pot;
            }
            get potencia() {
                return this.pot;
            }
        }
        Motores.Turbo = Turbo;
        class Motor {
            ligado;
            cilindros;
            port;
            constructor(port, cilindros, turbo) {
                this.ligado = false;
                this.port = port + (turbo ? turbo.potencia : 0);
                this.cilindros = cilindros;
            }
            set liga(ligado) {
                this.ligado = ligado;
            }
            get liga() {
                return this.ligado;
            }
            get potencia() {
                return this.port;
            }
        }
        Motores.Motor = Motor;
    })(Motores || (Motores = {}));
})(Veiculos || (Veiculos = {}));
const carro1 = new Veiculos.CarroEsportivo("i30", 1);
const carro2 = new Veiculos.CarroPopular("Nirvus", 2);
console.log(`Nome : ${carro1.MeuNome}`);
console.log(`Cor : ${carro1.MinhaCor}`);
console.log(`Cv : ${carro1.MinhaPotencia}`);
console.log(`Estou ligado? : ${carro1.EstouLigado}`);
console.log(`-----------------------------------------`);
console.log(`Cor : ${carro2.MeuNome}`);
console.log(`Cor : ${carro2.MinhaCor}`);
console.log(`Cv : ${carro2.MinhaPotencia}`);
console.log(`Estou ligado? : ${carro2.EstouLigado}`);
