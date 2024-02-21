let curso1:cursosInter;
let curso2:cursosInter; //Já especificando que vamos utilizar a estrutura de INTERFACE!
let curso3
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
let curso1p:cursoProgramacao;
let curso2p:cursoProgramacao;
let curso3p:cursoArtes;


console.log(curso1);
console.log(curso2);//Utilizando uma interface 



