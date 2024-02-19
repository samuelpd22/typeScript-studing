//Orientação de objetos.
class Computador {

    nomeObj:string="";
    
    ram:number=0;

    vCpu:number=0;

    ligado:boolean=false;

    //Assim geramos um construtor , diferente de Java!
    constructor(nomeObj:string, ram:number,vCpu:number,ligado:boolean){
        this.nomeObj = nomeObj;
        this.ram = ram;
        this.vCpu = vCpu;
        this.ligado = ligado;
    }

    info():void{
        console.log(`Nome: ${this.nomeObj}`);
        console.log(`Cpu: ${this.vCpu}`);
        console.log(`Ligado?: ${this.ligado?"Sim":"Não"}`);//Se estiver ligado já vai imprimir as condições.
        //Funciona como o If , Else
        console.log(`-----------------------------------------------------`);
    }

}
//Instanciar da maneira correta!
const comp1 = new Computador("Carão",18,10,true);
const comp2 = new Computador("Gamer",18,20,true);
const comp3 = new Computador("Barato",4,10,false);


/* Maneira errada!
comp1.nomeObj="Gamer";
comp2.nomeObj="Baratão";
comp3.nomeObj="Carão";
*/

console.log(comp1);
console.log(comp2);
console.log(comp3);

comp1.info();
comp2.info();
comp3.info();

comp1.ligado=true; //Por ser um METODO publico ,podemos fazer alteração a qualquer momento.