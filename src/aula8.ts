/*let dados:object={  // Forma de declarar objeto, porem dá erro de syntax!
    nome:"Samuel",   
    idade:23,
    status:"A"
};*/
let dados={ //Forma de declarar objeto , que deu certo!
    nome:"Samuel",
    idade:23,
    status:"A",
    ola:() => {console.log("Eu sou uma função(METODO) dentro do objeto!")},
   // info:(p) => {console.log(p)}//Metodo do tipo STRING que retorna um dado
    //inserido
};

console.log(dados);
console.log(typeof(dados));//Retorna o tipo do objeto, ou metodo
console.log(dados.nome);//Imprimir somente a propriedade NOME.
console.log(dados.idade);//Imprimir apenas a propriedade IDADDE
console.log(dados.status);// // // // // // // // // //  STATUS
//          PARA ALTERAR AS PROPRIEDADES DO OBJETO BASTA :
dados.nome = "Lara";
dados.idade = 18;
dados.status = "B";
dados.ola();
//dados.info(dados.nome);


console.log(dados);