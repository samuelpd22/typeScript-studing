class Conta0 { // Boas praticas, classes sempre com a primeira letra MAICUSCULA
   public numero:number;
   public titular:string;

    constructor(numero:number,titular:string){ //Estão em escopos diferentes!!  
        this.numero = numero;
        this.titular = titular; //Apontando diretamente para classe, pelo "THIS"
        
    }
}

class ContaPfisica extends Conta0 { //extends indica que estão herdando tudo que está em Conta0!

    
}
class ContaPJuridica extends Conta0 { 

    
}
const contPJ = new ContaPJuridica(59912,"Lara");
console.log(contPJ.titular);
console.log(contPJ.numero);

const conta1 = new ContaPfisica(24422,"Samuel"); //Herdou já o construtor do CONTA0! CLASSE PAI.
console.log(conta1.titular);
console.log(conta1.numero);
