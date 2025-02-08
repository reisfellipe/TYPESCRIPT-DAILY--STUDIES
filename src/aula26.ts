//Aprendendo a usar Interfaces
// Uma interface é usada para definir um contrato que deve ser cumprido por qualquer classe que a implemente.
// Uma interface pode conter métodos, propriedades e eventos.
// Uma classe pode implementar várias interfaces.

interface curso{
    titulo:string;
    descricao:string;
    iniciarCurso?():void;// método
}

interface cursoProgramação extends curso{
    aula:number;
    maxAlunos?:number; // o sinal de ? indica que a propriedade pode ser opcional e não obrigatória
}

interface cursoArtes extends curso{    
    aula:number;
    maxAlunos?:number; 
}

//Como estava antes o curso1
let curso2:{
    titulo:string;
    descricao:string;
    aula:number;
    maxAlunos:number;
}

let curso1:cursoProgramação
let curso3:cursoArtes

// curso1={titulo:"Typescript", descricao:"Desenvolvimento de aplicações",aula:10,maxAlunos:30};
curso2={titulo:"Python", descricao:"Desenvolvimento de aplicações",aula:23, maxAlunos:50};

curso3={titulo:"Java", descricao:"Desenvolvimento de aplicações",aula:10};

console.log(curso2);
console.log(curso3);