let nvalor:number;
let svalor:string;
let uvalor:unknown;

nvalor = 10;
svalor = "Samuel";
uvalor = 11; 

nvalor = <number>uvalor;//Associando valor desconhido com um numerico.
svalor = <string> uvalor;//Afirmação de tipo!

console.log(typeof(nvalor));
console.log(typeof(svalor));
console.log(typeof(uvalor));// Vai imprimir do tipo number, por que eu defini!