
let av = [10,20,30,40]
let [aa,bb,cc,dd] =  av;

console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
/*aa = av[0];
bb = av[1];
cc = av[2];
dd = av[3];*/

let [a1, b1, c2 ,d1] = ["Zezin","lAele","Armindo","Cavador"];

console.log(a1);
console.log(b1);
console.log(c2);
console.log(d1);

const objv2 = {
    cor1:"Verde",
    cor2:"Amarelo",
    cor3:"Azul",
    cor4:"Branco"

}
let {cor1 ,cor2 , cor3 , cor4}= objv2
console.log(cor3);
console.log(cor1);
console.log(cor2);


let [nu1=0,nu2=0,...nu3] = [10,20,24,24,52,54,64,73,53];
console.log(nu1,nu2,nu3);

const Zcores=()=>{
    return ["Verde","Amarelo","Azul","Branco"];
}
let [co1,co2,co3,co4] = Zcores();
console.log(co1,co2,co3,co4);


let texto ="Curso de typescript";
let [...t]=texto.split(" ");//Vai salvar 3 variaveis separandas pelo espaço
console.log(t);