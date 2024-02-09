enum diasSemana{
    domingo=1,
    segunda=2,
    terca=3,
    quarta=4,
    quinta=5,
    sexta=6,
    sabado=7
}

console.log(diasSemana.quinta);//Vai retornar o valor que está atribuido - numero
console.log(diasSemana['domingo']);//Vai retornar o valor que está atribuido - numero
console.log(diasSemana[1]);//Agora vai retornar o DOMINGO!

const d=  new Date();
console.log(d.getDate);//Retonara o número 
console.log(diasSemana[d.getDay()]);//Retorna o String do valor do index do getday

enum cores {
    branco="#fff",
    preto="#000",
    vermelho="#f00",
    verde="#0f0",
    azul="#00f"
}
