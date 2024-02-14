function logar (user:string,senha:string):void{//NÃO ESPERA UM RETORNO 
    console.log(`User: ${user}`);
    console.log(`Senha: ${senha}`);
}

logar("Samuel","23344");
logar("teste","0004");

function soma2(valor1:number,valor2:number):number{//VAI ESPERAR UM RETORNO NUMBER
    let res = valor1 + valor2;
    return res;
}
soma2(2,2);//Não vai retornar nada
console.log(soma2(4,8));//Jeito correto de retornar no console

let n_res:number = soma2(2,2);
let n_str:string = soma2(2,4).toString();//Convertendo em String após a soma.
console.log(n_res);
console.log(n_str);