
namespace Veiculos{

    export class Carro{ //Preciso dar um export para utilizar fora da estrutura NAMESPACE
        nome:string;
        motor:Motores.Motor;
        constructor(nome:string){
            this.nome = nome;
            this.motor = new Motores.Motor(100);
        }
    }

}

namespace Motores{

    class Turbo{
        pot:number;
        constructor(pot:number){
            this.pot = pot;
        }
    }

    export class Motor{
        port:number
        constructor(port:number){
            this.port = port;
        }
    }
}
const car1 = new Veiculos.Carro("i30");
console.log(car1.nome);
console.log(car1.motor);

