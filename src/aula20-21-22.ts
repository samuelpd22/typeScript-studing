class Conta0 { // Boas praticas, classes sempre com a primeira letra MAICUSCULA
   protected numero:number;
   protected titular:string;

    constructor(titular:string){ //Estão em escopos diferentes!!  
        this.numero = this.gerarNumeroConta();
        this.titular = titular; //Apontando diretamente para classe, pelo "THIS"
        
    }
    private gerarNumeroConta():number {
        return Math.floor(Math.random()*100000)+1;
    }
    info(){
        console.log(`Titular: ${this.titular}`)
        console.log(`Numero: ${this.numero}`)
        console.log("-------------------------")
    }
}

class ContaPfisica extends Conta0 { //extends indica que estão herdando tudo que está em Conta0!
    cpf:number;
    constructor(cpf:number, titular:string){
        super(titular); //Vai adicionar a esse construtor os atributos da classe PAI
        this.cpf = cpf;
        console.log(`Conta Fisica criada!${titular}`)// Metodos para obter variavel PRIVATE
    }
    
}
class ContaPJuridica extends Conta0 { 
    cnpj:number;
    constructor(cnpj:number, titular:string){
        super(titular); 
        this.cnpj = cnpj;
        console.log(`Conta PJ criada!${titular}`)
    }
    
}
const contPJ = new ContaPJuridica(131333,"Lara");
/*console.log("Nome titular: " +contPJ.titular);
console.log("Numero conta:" + contPJ.numero);
console.log("CNPJ:" + contPJ.cnpj);*/

const conta1 = new ContaPfisica(121313133,"Samuel"); //Herdou já o construtor do CONTA0! CLASSE PAI.
/*console.log("Nome titular: " + conta1.titular);
console.log("Numero conta:" + conta1.numero);
console.log("CPF: "+ conta1.cpf);*/

conta1.info();
contPJ.info();//Posso utilizar,pois este metodo vem da classe PAI!