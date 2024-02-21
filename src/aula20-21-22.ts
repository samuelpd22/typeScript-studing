//Public - Acessado de qualquer local.
//Private - Acessado somente na propria classe.
//Protected - Acessado somente nas classes filhas e sua propria classe.

class Conta0 { // Boas praticas, classes sempre com a primeira letra MAICUSCULA
   protected numero:number;
   protected titular:string;
   protected saldoConta:number;

    constructor(titular:string){ //Estão em escopos diferentes!!  
        this.numero = this.gerarNumeroConta();
        this.titular = titular; //Apontando diretamente para classe, pelo "THIS"
        this.saldoConta = 0;
        
    }
    private gerarNumeroConta():number {
        return Math.floor(Math.random()*100000)+1;
    }
    info(){
        console.log(`Titular: ${this.titular}`)
        console.log(`Numero: ${this.numero}`)
       
    }
    public saldo():number{
        return this.saldoConta;
    }
    protected deposito(valor:number){
        if(valor < 0){
            console.log("Valor invalido");
            return
        } 
        this.saldoConta+=valor; 
    }
    protected saque(valor:number){
        if(valor < 0){
            console.log("Valor invalido");
            return
        } 
        if(valor <= this.saldoConta){
            this.saldoConta-=valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }
   

   
}

class ContaPfisica extends Conta0 { //extends indica que estão herdando tudo que está em Conta0!
    cpf:number;
    constructor(cpf:number, titular:string){
        super(titular); //Vai adicionar a esse construtor os atributos da classe PAI
        this.cpf = cpf;
        console.log(`Conta Fisica criada!${titular}`)// Metodos para obter variavel PRIVATE
    }
    info(){
        super.info()
        console.log(`CPF....:${this.cpf}`);
        console.log("-------------------------")
    }
    public deposito(valor:number){
        if(valor > 1000){
            console.log("Valor de deposito muito grande para esse tipo de conta.")
        } else {
            super.deposito(valor)
        }
    }
     public saque2(valor:number){
        if(valor > 1000){
            console.log("Valor de saque muito grande para o limite da conta");
        } else {
            super.saque(valor);
        }
    }
    
}
class ContaPJuridica extends Conta0 { 
    cnpj:number;
    constructor(cnpj:number, titular:string){
        super(titular); 
        this.cnpj = cnpj;
        console.log(`Conta PJ criada!${titular}`)
    }
    info(){
        super.info()
        console.log(`CNPJ...:${this.cnpj}`);
        console.log("-------------------------")
    }
    public deposito(valor:number){
        if(valor > 10000){
            console.log("Valor de deposito muito grande para esse tipo de conta.")
        } else {
            super.deposito(valor)
        }
    }
    public saque2(valor:number){
        if(valor > 10000){
            console.log("Valor de saque muito grande para o limite da conta");
        } else {
            super.saque(valor);
        }
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

//conta1.info();
//contPJ.info();//Posso utilizar,pois este metodo vem da classe PAI!
conta1.deposito(1000);
conta1.saque2(2);
console.log(conta1.saldo());

