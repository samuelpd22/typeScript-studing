
namespace Veiculos{
    enum Cores{
        "Preto","Branco","Prata","Vermelho","Roxo"
    }
     abstract class Carro{ 
        private nome:string;
        private motor:Motores.Motor;
        private cor:String;
        constructor(nome:string,motor:Motores.Motor,cor:Cores){
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        public ligar(){
            this.motor.liga=true;
        }
        public desligar(){
            this.motor.liga=false;
        }
        get MinhaCor(){
            return this.cor;
        }
        get MeuNome(){
            return this.nome;
        }
        get EstouLigado(){
            return (this.motor.liga?"Sim":"Não");
        }
        get MinhaPotencia(){
            return this.motor.potencia;
        }
    }
    export class CarroEsportivo extends Carro{
        constructor(nome:string,cor:Cores){
            super(nome,new Motores.Motor(145,4,new Motores.Turbo(100)),2);
        }

}
    export class CarroPopular extends Carro{
        constructor(nome:string,cor:Cores){
            super(nome,new Motores.Motor(100,3),1)
        }
    }

namespace Motores{

    export class Turbo{
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

   
}
const carro1 = new Veiculos.CarroEsportivo("i30",1);
const carro2 = new Veiculos.CarroPopular("Nirvus",2);

console.log(`Nome : ${carro1.MeuNome}`);
console.log(`Cor : ${carro1.MinhaCor}`);
console.log(`Cv : ${carro1.MinhaPotencia}`);
console.log(`Estou ligado? : ${carro1.EstouLigado}`);
console.log(`-----------------------------------------`);
console.log(`Cor : ${carro2.MeuNome}`);
console.log(`Cor : ${carro2.MinhaCor}`);
console.log(`Cv : ${carro2.MinhaPotencia}`);
console.log(`Estou ligado? : ${carro2.EstouLigado}`);

