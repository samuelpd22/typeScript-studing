export class Pessoa{ //NECESSITO EXPORTAR AQUI , E IMPORTAR ONDE FOR
    nome:string;
    altura:number
    constructor(nome:string,altura:number){
        this.nome = nome;
        this.altura = altura;
    }
}
class objeto{
    nome:string;
    constructor(nome:string){
        this.nome = nome;
    }
}