//Orientação de objetos.
class Computador {

    nomeObj:string="";
    
    ram:number=0;

    vCpu:number=0;

    ligado:boolean=false;

}
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();

comp1.nomeObj="Gamer";
comp2.nomeObj="Baratão";
comp3.nomeObj="Carão";

console.log(comp1.nomeObj);
console.log(comp2.nomeObj);
console.log(comp3.nomeObj);