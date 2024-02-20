class Conta0 { // Boas praticas, classes sempre com a primeira letra MAICUSCULA
   public numero:number;
   public titular:string;

    constructor(titular:string){ //Estão em escopos diferentes!!  
        this.numero = this.gerarNumeroConta();
        this.titular = titular; //Apontando diretamente para classe, pelo "THIS"
        
    }
    gerarNumeroConta():number {
        return Math.floor(Math.random()*100000)+1;
    }
}

class ContaPfisica extends Conta0 { //extends indica que estão herdando tudo que está em Conta0!
    cpf:number;
    constructor(cpf:number, titular:string){
        super(titular); //Vai adicionar a esse construtor os atributos da classe PAI
        this.cpf = cpf;
    }
    
}
class ContaPJuridica extends Conta0 { 
    cnpj:number;
    constructor(cnpj:number, titular:string){
        super(titular); 
        this.cnpj = cnpj;
    }
    
}
const contPJ = new ContaPJuridica(131333,"Lara");
console.log("Nome titular: " +contPJ.titular);
console.log("Numero conta:" + contPJ.numero);
console.log("CNPJ:" + contPJ.cnpj);

const conta1 = new ContaPfisica(121313133,"Samuel"); //Herdou já o construtor do CONTA0! CLASSE PAI.
console.log("Nome titular: " + conta1.titular);
console.log("Numero conta:" + conta1.numero);
console.log("CPF: "+ conta1.cpf);
