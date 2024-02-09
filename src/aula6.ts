let numeros:number[] = [10,20,30];
//let numeros : Array<number | string >;
//let numeros:(number | string)[] = [20,30,40,"Samuel"];

numeros.push(50);// inserir no final do array
numeros.unshift(10);// inserir no inicio do array

numeros.pop();// retira elemento no final do array
numeros.shift();//retira no inicio do array


console.log(numeros);

let numeros_ro:ReadonlyArray<number> = [ 100,200,300 ];
// Não permite alteração, e usado apenas pra vizualização!