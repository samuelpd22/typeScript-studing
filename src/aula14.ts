//Todas as vezes criando uma função com "function" o js eleva ela ao topo, podendo declarar ela antes ou depois...
teste();

function teste():void{
    console.log("Teste");
}

//Diferente do "Arrow Function =>" que temos que criar no inicio e utilizar depois!!

const teste1=(text:string):void => {   // Sempre vai ter que ser associada a uma variavel ou constante !!!
    console.log(text);
}
teste1("Java e TOP!");
teste1("Java Spring e VIDA!")
// ##################################################################################### //

const soma3=(n1:number,n2:number):number => {   
    let res = n1 + n2;
    return res;
}
console.log(soma3(3,3));

// ##################################################################################### //

const somaArray=(n:number[]):number => {
    let s : number = 0;
    n.forEach((e)=>{//Vai percorrer o array
        s+=e;
    })
    return s;
}
let numerosA:number[]=[1,2,3,4,5];

console.log(somaArray(numerosA));