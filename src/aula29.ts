function f_teste<T,U>(v:T,r:U):T{ //Tipos genericos <T>
    return v;
}

//Pode operar com qualquer tipo de valor se especificado dentro do <>
console.log(f_teste<String,Number>("44",11));
console.log(f_teste<Number,String>(24,"tEsT"));
console.log(f_teste<boolean, boolean>(true,false));
//Vai retornar so o tipo T, pois ele esta como retorno.
class C_teste<T>{
    public valor:T;
    constructor(valor:T){
        this.valor = valor;
    } 
        
}
const c1teste = new C_teste<number>(22);
console.log(c1teste.valor);

const c2teste = new C_teste<string>("ze");
console.log(c2teste.valor);
//Pode receber tipos diferentes utilizando <>GENERICOS!