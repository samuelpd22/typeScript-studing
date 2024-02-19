import { info } from "console";

class Computador2 {

    private id:number;

    public nomeObj:string="";
    
    private ram:number=0; // Private e Protected não vão nem aparecer em outra classe ao instanciar

    private vCpu:number=0;

    private ligado:boolean=false;//Isso não me permite alterar esse parametro no metodo.

    //Assim geramos um construtor , diferente de Java!
    constructor(nomeObj:string, ram:number,vCpu:number,ligado:boolean){
        this.nomeObj = nomeObj;
        this.ram = ram;
        this.vCpu = vCpu;
        this.ligado = ligado;
        this.id=0;
    }

    info():void{ // Metodo publico!
        console.log(`Nome: ${this.nomeObj}`);
        console.log(`Cpu: ${this.vCpu}`);
        console.log(`Ram: ${this.ram}`)
        console.log(`Ligado?: ${this.ligado?"Sim":"Não"}`);//Se estiver ligado já vai imprimir as condições.
        //Funciona como o If , Else
        console.log(`-----------------------------------------------------`);
    }
    upgradeRam(qtde:number):void{
        if(qtde >= 0 && qtde <= 100 ){
            this.ram=qtde;// Se estiver de acordo com as condições, vai atribuir o valor a RAM!
        } else {
            console.log(`Valor ${qtde} não e permitido, para computador de nome, ${this.nomeObj}.`);
        }

    }

}
//Instanciar da maneira correta!
const comp4 = new Computador2("Carão",18,10,true);
const comp5 = new Computador2("Gamer",18,20,true);
const comp6 = new Computador2("Barato",4,10,false);

comp5.upgradeRam(-20);
comp5.nomeObj="Super RAPIDÃO"; 
comp5.info();
