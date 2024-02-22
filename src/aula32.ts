
namespace Veiculos{

    export class Carro{ //Preciso dar um export para utilizar fora da estrutura NAMESPACE
        nome:string;
        motor:Motores.Motor;
        constructor(nome:string){
            this.nome = nome;
            this.motor = new Motores.Motor(145,4);
        }
    }

}

namespace Motores{

    class Turbo{
        private pot:number;
        constructor(pot:number){
            this.pot = pot;
        }
        get potencia(){
            return this.pot;
        }
    }

    export class Motor{
        private ligado:boolean;
        private cilindros:number;
        private port:number
        constructor(port:number,cilindros:number,turbo?:Turbo){
            this.ligado = false;
            this.port = port + (turbo?turbo.potencia:0);
            this.cilindros = cilindros;
        }
        set liga(ligado:boolean){
            this.ligado = ligado;
        }
        get liga(){
            return this.ligado;
        }
        get potencia(){
            return this.port;
        }
       
    }
}
