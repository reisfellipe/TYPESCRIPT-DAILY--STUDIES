//O que é parametros rest?
/*Os parâmetros rest (ou "rest parameters") são uma funcionalidade do TypeScript que permite que você defina uma função que aceita um número variável de argumentos. Isso é útil quando você não sabe quantos argumentos uma função precisará lidar.*/

 //aqui voce se limita a dois argumentos
function fsoma(v1:number, v2:number){
    return v1 + v2;
}

// console.log(fsoma(10,20));


//Aqui você poderá usar quantos argumentos precisar na função
function fsoma2(...n:number[]){
    let s:number = 0;
    n.forEach((elementoN)=>{
        s += elementoN;
    })
    return s;
}

console.log(fsoma2(10,20,30,5));

//Usando o metodo de loop for of
function fsoma3(...n:number[]){
    let s:number = 0;
    for(let elementoN of n){
        s += elementoN;
    }
    return s;
}

console.log(fsoma3(10,5));