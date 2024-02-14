let nvalor:number;
let svalor:string;
let uvalor:unknown;

nvalor = 10;
svalor = "Samuel";
uvalor = 11; 

nvalor = <number>uvalor;//Associando valor desconhido com um numerico.
svalor = <string> uvalor;//Afirmação de tipo!
nvalor = <number> <unknown> svalor; //Converter primeiro para desconhecido para depois em outro tipo.


console.log(typeof(nvalor));
console.log(typeof(svalor));
console.log(typeof(uvalor));// Vai imprimir do tipo number, por que eu defini!

                    // ### para converter um tipo ### \\


nvalor =Number.parseInt(svalor);//Estamos CONVERTENDO OS TIPOS de String para Number
nvalor = 10;
svalor = nvalor.toString();//CONVERTENDO O TIPO Number ao tipo String


