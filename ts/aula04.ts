// AS 3 FORMAS ESTÃO CERTAS PARA DECLARAR ARRAYS COM TIPAGENS ESTÁTICAS EM TS

// let numeros:number[] = [1, 2, 3, 4, 5]; // array de números

// let numeros:Array<number|string>=[10,20,30, "msg"];

// let numeros:(number|string)[] = [10,20,"30"];

let numeros:Array<number>=[1,2,3,4,5];
numeros.unshift(0); // adiciona um elemento no início do array
numeros.push(6); // adiciona um elemento no final do array
console.log(numeros);

numeros.pop(); // remove o último elemento do array
numeros.shift(); // remove o primeiro elemento do array
console.log(numeros);

let numeros_ro:ReadonlyArray<number>=[100,200,300];
//Nesse caso não é possível adicionar ou remover elementos do array porque ele é readonly, então os valores são imutáveis.
//numeros_ro.push(400); // não é possível adicionar elementos no array nem remove-los ou reordena-los

console.log(numeros_ro);