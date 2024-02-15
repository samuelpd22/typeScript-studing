function fsoma(v1:number,v2:number,v3:number){
    return v1+v2+v3;
}
console.log(fsoma(1,2,3));


// PARAMETROS REST!!


function restSoma(...n:number[]){
    let s:number=0;
    //for(let en of n){
    //   s+=en;
    //}

    n.forEach((elementoN)=>{
        s+= elementoN;
    })
    return s;
}
console.log(restSoma(10,20,30,40,200));// Posso atribuir quantos valores eu quiser somar