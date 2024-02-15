function soma0(n1:number=0,n2:number=0):number{//Posso iniciar com um valor padrão  ou não!

    let res = n1 + n2;
    return res;
}
console.log(soma0(5,21));
console.log(soma0()); //Também da certo, pois deu um valor padrão acima ^

function novoUser1(user:string,pass:string,nome?:string):void{//Utilizando o ?: indica que é opcional
    console.log(`User: ${user}`)
    console.log(`Pass: ${pass}`)
    console.log(`Nome: ${nome}`)
};

novoUser1("Samuelpd","1234","Samuel Drumond");//Posso passar todos os parametros, ou...
novoUser1("Lara22","K4343");//Também será aceito pois coloquei o "?" na declaração do meu atributo ^^

                // #######################################################################//

function novoUser2(user:string,pass:string,nome?:string):void{//Utilizando o ?: indica que é opcional
    let dados = {user,pass,nome};
    console.log(dados); //Como objeto
};

novoUser2("Igorrib2","rib99","Igor Ribeiro");
novoUser2("Iguin22","irgg22");