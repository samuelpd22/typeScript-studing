"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(145, 4);
        }
    }
    Veiculos.Carro = Carro;
})(Veiculos || (Veiculos = {}));
var Motores;
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
