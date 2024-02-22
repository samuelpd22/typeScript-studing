/*let curso1:cursoProgramacao;
let curso2:cursoProgramacao;
let curso3:cursoArtes;


interface cursosInter{ //Agora posso criar infinitos elementos usando essa interface
    titulo:string,
    des:string,
    nAulas:number,
    nMaxAlunos:number
};


            //UTILIZANDO O OBJETO
let cursos1:{   
    titulo:string,
    des:string,
    nAulas:number,
    nMaxAlunos:number
};
            //UTILIZANDO A INTERFACE 
curso1={              
    titulo:"TypeScript",
    des:"Curso de typescript", 
    nAulas:102,
    nMaxAlunos:40
}   
curso2={
    titulo:"Java",
    des:"Curso de Java", 
    nAulas:200,
    nMaxAlunos:50,
}
interface cursoProgramacao extends cursosInter{ //TUDO QUE ESTIVER EM cursoInter VALE PARA cursoProgramacao.
    aulas:number;
    maxAlunos?:number;

}
interface cursoArtes extends cursosInter{ 
    aulas:number;
    maxAlunos?:number;

}



console.log(curso1);
console.log(curso2);//Utilizando uma interface 


*/
